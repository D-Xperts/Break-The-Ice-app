var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/breaktheice");

require('./server/users/userModel');
require('./server/events/eventModel');
require('./server/config/passport');

var events = require('./server/events/eventRoutes');
var users = require('./server/users/userRoutes');

var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use(passport.initialize());

app.use('/api/v1/events', events);
app.use('/api/v1/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(500).json({err:err})
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(500).json({err:err});
});

app.listen(process.env.PORT||3000);

// module.exports = app;