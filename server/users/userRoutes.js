var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Event = mongoose.model('events');
var User = mongoose.model('users');

router.post('/register', User.createUser);

router.post('/login', User.authenticateUser);

router.param('user', User.getUser);

router.delete('/users/:user', User.deleteUser)

router.post('/users/:user/events', User.joinEvent)

module.exports = router;