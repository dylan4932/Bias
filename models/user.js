/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 1
	},
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	phone:{
		type: String,
		required: true,
		minlength: 7,
		trim:true,
		unique: true,
		validate: {
			validator: validator.isMobilePhone,
			message: '无效手机号，请更改'
		}
	},
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail, 
			message: '无效邮箱，请更改'
		}
	}, 
	hospital: {
		type: String,
        trim: true,

	},
    department: {
		type: String,
		trim: true
	},
	company:{
		type: String,
        required: true,
		minlength: 1,
		trim: true
	},
	favorite:{
		type: Array,
		required:true
	},
    createdTime:{
        type:Date,
        required:true
    },
    updatedTime:{
        type:Date,
        required:true
    },
	expireTime:{
		type:Date,
		required:true
	}

})



UserSchema.pre('save', function(next) {
	const user = this; 

	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})


UserSchema.statics.findByUsernamePassword = function(username, password) {
	const User = this 

	return User.findOne({ username: username }).then((user) => {
		if (!user) {
			return Promise.reject()  
		}
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

const User = mongoose.model('User', UserSchema)
module.exports = { User }