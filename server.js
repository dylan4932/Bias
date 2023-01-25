"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
// mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { Bias } = require("./models/bias");
const { Contact } = require("./models/contact");
const { Comment } = require("./models/comment");

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();


// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

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

// set session
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 1800000, //set session to 30mins
            httpOnly: true
        }
    })
);


// a Get route to get homepage items
app.get('/api/bias', mongoChecker, async (req, res) => {

    try {
        const items = await Bias.find()
        res.send({ items })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

app.get("/bias/:id", mongoChecker, async (req, res) => {

    const id = req.params.id
    if (!ObjectID.isValid(id)) {
		res.status(404).send('Invalid id')
		return;
    }
    try {
        const bias = await Bias.findById({_id: id})
        res.send({ bias })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

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
    log(req.body)

    // Create a new user
    const contact = new Contact ({
        title: req.body.title,
        explain: req.body.explain,
        background: req.body.background,
        name: req.body.name,
        email: req.body.email
    })

    try {
        // Save the Contact
        const newContact = await contact.save()
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
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 8080;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});

