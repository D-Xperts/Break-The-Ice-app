var express = require('express');
var router = express.Router();
var eventController = require('./eventController.js')


router.route("/")
  .get(eventController.getEvents)
  .post(eventController.createEvent)
  .delete(eventController.deleteEvent);

module.exports = router;