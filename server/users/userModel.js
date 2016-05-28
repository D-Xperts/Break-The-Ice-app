var mongoose = require('mongoose');
var crypto = require('crypto'); // for hashing
var jwt = require('jsonwebtoken'); // for tokens

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},

	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	alias: {
		type: String,
		required: true
	},
	hometown: {
		type: String,
		required: true
	},
	interests: {
		type: Array,
		required: true
	},
	pic_url: {
		type: String,
		required: false
	},

	//password not stored in the DB
	hash: String,
	salt: String
});

UserSchema.methods.setPassword = function(password) {
	//set the new user password on register
	this.salt = crypto.randomBytes(16).toString('hex');

	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
	//see if password is valid on login
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

  	return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {

  // get session token to send back to user
  // set expiration to 60 days
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    _id: this._id,
    alias: this.alias,
    email: this.email,
    exp: parseInt(exp.getTime() / 1000),
  }, 'SECRET');
};



module.exports = mongoose.model('User', UserSchema);