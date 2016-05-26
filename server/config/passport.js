var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
  {
    //set email to be username field for passport
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true,
    session:false
  },
  function(req, username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Invalid email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Invalid password.' });
      }
      return done(null, user);
    });
  }
))