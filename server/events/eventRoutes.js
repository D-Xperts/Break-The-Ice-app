var express = require('express');
var router = express.Router();
var eventController = require('./eventController.js')

router.get('/api/v1/events/', eventController.getEvents);

router.post('/api/v1/events/', eventController.createEvent);

router.delete('api/v1/events/', eventController.deleteEvent);

module.exports = router;