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
    //If looking for a specific event
    if(request.query.eventId !== undefined) {
      Event.findById(request.query.eventId).exec(function (err, events) {
        if(err) { return console.error(err); }
        res.json(events);
      })
    }

    //If looking for a limited number of events, returns the soonest to occur
    if(request.query.limit !== undefined) {
      Event.find().exec(function (err, events) {
        if(err) { return console.error(err); }
        
        var returnVal;
        returnVal = events.sort(function(a, b) {
            return b.start_time - a.start_time;
          })
          .slice(0, request.query.limit)

        res.json(returnVal);
      })
    }

    //If not queries are included, return all events
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