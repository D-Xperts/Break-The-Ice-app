var Event = require('./eventModel.js');

module.exports = {
  createEvent: function(req, res, next) {
    var newEvent = new Event({
      event_name : req.body.name,
      location   : req.body.location,
      start_time : req.body.startTime,
      end_time   : req.body.endTime,
      pic_url    : req.body.picUrl,
      categories : req.body.categories,
      users_att  : req.body.usersAtt,
      owners     : req.body.owners,
      description: req.body.description
    });

    newEvent.save(function (err, newEvent) {
      if(err) { return console.error(err); }
      res.json(newEvent);
    });
  },

  //To do: Accept an object argument and filter based on it
  getEvents: function(req, res, next) {
    //if accept an object argument need to somehow grab it? or let frontend do it?
    Event.find().exec(function (err, events) {
      if(err) { return console.error(err); }
      res.json(events);
    })
  },

  //Unsure if syntax is correct, need to confirm
  deleteEvent: function(req, res, next) {
    //wishful programming here
    //http://expressjs.com/en/api.html#req
    //need to grab the route params here
    var event_id = req.params.event_id;
    Event.find({ _id: event_id}).remove(function(err) {
      if(err) {
        return console.error(err);
      }
      return null;
    });
  },

  editEvent: function() {

  }

};