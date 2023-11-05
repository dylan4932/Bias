"use strict";
const log = console.log;

const http = require("http");
const https = require("https");
const express = require("express");
const app = express();
const path = require('path')
const fs = require("fs")

const { mongoose } = require("./db/mongoose");


const { Bias } = require("./models/bias");
const { Contact } = require("./models/contact");
const { Comment } = require("./models/comment");
const { User } = require("./models/user");

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();


const { ObjectID } = require("mongodb");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) { 
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

const rateLimit = require('express-rate-limit');

// Define the API calls rate limit rule
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Define the file rate limit rule
const fileLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // Limit each IP to 1000 requests per window (you might adjust this depending on your traffic needs)
    standardHeaders: true, 
    legacyHeaders: false,
});

const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}

// set session
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000, //set session to 10mins
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const timeUpdated = new Date(new Date().getTime()+(parseInt(new Date().getTimezoneOffset()/60) + 8)*3600*1000);
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.

            req.session.user = user._id;
            req.session.username = user.username;
            req.session.name = user.name;
            req.session.email = user.email;
            req.session.phone = user.phone;
            req.session.hospital = user.hospital;
            req.session.department = user.department;
            req.session.company = user.company;
            req.session.favorite = user.favorite;
            req.session.createdTime = user.createdTime;
            req.session.updatedTime = timeUpdated;
            req.session.expireTime = user.expireTime;

            User.findOneAndUpdate({_id: user._id}, {$set: {"updatedTime": timeUpdated}}, 
            {new: true, useFindAndModify: false}).then((result)=>{
                const timeCreated = user.createdTime.toLocaleString('zh-CN', options);
                const timeExpired = user.expireTime.toLocaleString('zh-CN', options);
                const updatedTime = timeUpdated.toLocaleTimeString('zh-CN', options);
                res.send({ 
                    user: user._id,
                    username: username,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    hospital: user.hospital,
                    department: user.department,
                    company: user.company,
                    favorite: user.favorite,
                    createdTime: timeCreated,
                    updatedTime:  updatedTime,
                    expireTime: timeExpired
                    });
            })
            .catch((error) => {
                log(error)
                res.status(500).send("服务器问题")
            })
                
        })
        .catch(error => {
            res.status(400).send()
            console.log('密码错误')
        });
})

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        res.status(200).send("log out successful")
        if (error) {
            console.log("server log out 3")
            res.status(500).send(error);
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ user: req.session.user,
                name: req.session.name,
                email: req.session.email,
                phone: req.session.phone,
                hospital: req.session.hospital,
                department: req.session.department,
                company: req.session.company,
                favorite: req.session.favorite,
                createdTime: req.session.createdTime,
                updatedTime: req.session.updatedTime,
                expireTime: req.session.expireTime
                });
    } else {
        res.status(401).send();
    }
});


/*********************************************************/

/*** API Routes below ************************************/
// User API Route
app.post('/api/users', mongoChecker, async (req, res) => {

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        hospital: req.body.hospital,
        department: req.body.department,
        company: req.body.company,
        expireTime: new Date(req.body.expireTime),
        favorite: [],
        createdTime: Date.now(),
        updatedTime: Date.now()
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// Apply the rate limit to the API route
app.use('/api/bias', apiLimiter);
// a Get route to get homepage biases
app.get('/api/bias', mongoChecker, async (req, res) => {

    const projection = { _id: 1, name: 1, definition: 1 };
    try {
        const items = await Bias.find({}, projection)
        res.send({ items })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

app.get("/bias/:id", apiLimiter, mongoChecker, async (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send('Invalid id');
        return;
    }
    try {
        const bias = await Bias.findById({_id: id});
        if (!bias) {
            res.status(404).send('Bias not found');
            return;
        }
        res.send({ bias });
    } catch(error) {
        log(error);
        res.status(500).send("Internal Server Error");
    }
});

// Apply the rate limit to the API route
app.use('/api/comments', apiLimiter);
app.get('/api/comments', mongoChecker, async (req, res) => {
    
    try {
        const comments = await Comment.find()
        res.send({ comments })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

app.post('/api/comment', mongoChecker, async (req, res) => {
    const today = new Date().toISOString().slice(0, 10)
    // Create a new user
    const comment = new Comment ({
        comment: req.body.comment,
        date: today,
        like: 0,
        dislike: 0,
    })

    try {
        // Save the user
        const newComment = await comment.save()
        res.send(newComment)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

app.post('/api/contact', mongoChecker, async (req, res) => {

    // Create a new user
    const contact = new Contact ({
        title: req.body.title,
        explain: req.body.explain,
        background: req.body.background,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })

    try {
        // Save the Contact
        const newContact = await contact.save()
        console.log(newContact)
        res.send(newContact)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') 
        }
    }
})

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/build")));

// Apply the rate limit middleware to the wildcard route
app.use("*", fileLimiter);
// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/react-gh-pages", "/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/build/index.html"));
});


const httpsOption = {
    key: fs.readFileSync("./https/menschen.com.cn.key"),
    cert: fs.readFileSync("./https/menschen.com.cn_bundle.crt")
}

// /*************************************************/
// // https server listening...
http.createServer(app).listen(80, () => {
    log(`HTTPS Listening on port ${80}...`);
});
https.createServer(httpsOption, app).listen(443, () => {
    log(`HTTPS Listening on port ${443}...`);
});