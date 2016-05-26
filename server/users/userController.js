var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var passport = require('passport');
var jwt = require('express-jwt');

module.exports = {
	createUser: function(req, res, next) {
		if (!req.body.email, !req.body.password) {
			return res.status(400).json({message: "Please fill out all fields"});
		}

		var user = new User;

		user.email = req.body.email;
		user.first_name = req.body.first_name;
		user.last_name = req.body.last_name;
		user.alias = req.body.alias;
		user.hometown = req.body.hometown;
		user.interests = req.body.interests;
		user.pic_url = req.body.pic_url;

		user.setPassword(req.body.password);
		user.save(function(err) {
			if(err) {return next(err);}

			return res.json({token: user.generateJWT()});
		});
	},

	getUser: function(req, res, next, id) {
		var query = User.findById(id);

		query.exec(function(err, user) {
			if (err) { return next(err); }
			if (!post) { return next(new Error("can't find user")); }

			req.user = user;
			return next();
		})
	},

	deleteUser: function(req, res, id) {
		var query = User.findById(id);

		query.remove().exec();
	},

	authenticateUser: function(req, res, next) {
		if(!req.body.email || !req.body.password){
		  return res.status(400).json({message: 'Please fill out all fields'});
		}

		  passport.authenticate('local', function(err, user, info){
		    if(err){ return next(err); }

		    if(user){
		      return res.json({token: user.generateJWT()});
		    } else {
		      return res.status(401).json(info);
		    }
		  })(req, res, next);
	},

	// joinEvent: function(req, res, next, id) {
	// 	var queryUser = User.findById(id);
	// 	var queryEvent = Event.findById(id);
	// }
};