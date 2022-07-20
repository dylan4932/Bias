const mongoose = require('mongoose')
const Contact = mongoose.model('contact', {
    
    title:{
        type: String,
		required: true,
		minlegth: 1
    },
    explain:{
        type: String,
		required: true,
		minlegth: 1
    },
    background:{
        type: String,
		required: true,
		minlegth: 1
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

module.exports = { Contact }