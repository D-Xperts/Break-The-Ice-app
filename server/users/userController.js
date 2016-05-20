var User = require('./userModel');
var Event = require('./eventModel');

module.exports = {
	createUser: function(req, res, next) {
		if (!req.body.email, !req.body.password) {
			return res.status(400).json({message: "Please fill out all fields"});
		}

		var user = new User;

	},

	getUser: function(req, res, next, id) {

	},

	deleteUser: function(req, res) {

	},

	authenticateUser: function(req, res next) {

	},

	joinEvent: function(req, res, next, id) {

	}
};