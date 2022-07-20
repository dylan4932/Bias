const mongoose = require('mongoose')
const Post = mongoose.model('post', {
    
    post:{
        type: String,
		required: true,
		minlegth: 1,
        unique: true
    },
    img:{
        type: String,
		required: true,
		minlegth: 1
    },
    background:{
        type: String,
		required: true,
		minlegth: 10
    },
    name:{
        type: String,
		required: true,
		minlegth: 1,
        trim: true
    },
    email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
	}, 
    
})

module.exports = { Post }