var express = require('express');
var router = express.Router();
var User = require('./userController');
var jwt = require('express-jwt');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});


router.post('/register', User.createUser);

router.post('/login', User.authenticateUser);

router.param('user', User.getUser);

router.delete('/users/:user', auth, User.deleteUser)

// router.post('/users/:user/events', auth, User.joinEvent)

module.exports = router;