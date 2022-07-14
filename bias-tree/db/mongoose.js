const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 
'mongodb+srv://team40:123@cluster1.trpht.mongodb.net/OneTrade?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = { mongoose } 