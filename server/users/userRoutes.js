var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Event = mongoose.model('events');
var User = mongoose.model('users');

router.post('/register', createUser);

router.post('/login', authenticateUser);

router.param('user', getUser);

router.delete('/users/:user', deleteUser)

router.post('/users/:user/events', joinEvent)

module.exports = router;