var express = require('express');
var router = express.Router();
var eventController = require('./eventController.js')

router.get('/', eventController.getEvents);

router.post('/', eventController.createEvent);

router.delete('/', eventController.deleteEvent);

module.exports = router;