const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 
'mongodb+srv://onion-portal:Mmwi0GJw6PMXEevG@portal-cluster.ubjjkhb.mongodb.net/onion-portal?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = { mongoose } 