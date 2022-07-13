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

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'onetrade-team40',
    api_key: '823466749188792',
    api_secret: 'xAGjWtBWirKbIGgYaZ0CIbpMuQM'
});

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const item = require("./models/bias");
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

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/home"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});

