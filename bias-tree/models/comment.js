const mongoose = require('mongoose')

const Comment = mongoose.model('comment', {
    
    comment:{
        type: String,
		required: true,
		minlegth: 1
    },
    date: {
        type: String,
		required: true,
		minlegth: 5
    },
    like: {
        type: Number, 
        min: 0,
        required:true
    },
    dislike: {
        type: Number, 
        min: 0,
        required:true
    }
    
})

module.exports = { Comment }