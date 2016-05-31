var Event = require('./eventModel.js');

module.exports = {

  //Accepts an event info in the body and saves to the database
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

  //Returns event info
  //If an eventID query is included, just returns that event
  //If a limit query is included, returns that many events by soonest to occur
  getEvents: function(req, res, next) {
    var returnVal;

    //If looking for a specific event
    if(req.query.eventId !== undefined) {
      Event.findById(req.query.eventId).populate('users_att').exec(function (err, events) {
        if(err) { return console.error(err); }
        res.json(events);
      })
    }

    //If looking for a limited number of events, returns the soonest to occur
    if(req.query.limit !== undefined) {
      Event.find().exec(function (err, events) {
        if(err) { return console.error(err); }
        
        returnVal = events.sort(function(a, b) {
            return b.start_time - a.start_time;
          })
          .slice(0, req.query.limit)

        res.json(returnVal);
      })
    }

    //If not queries are included, return all events
    if (req.query.eventId === undefined && req.query.limit === undefined) {
      Event.find().exec(function (err, events) {
        if(err) { return console.error(err); }

        returnVal = events.sort(function(a, b) {
            return b.start_time - a.start_time;
          })
        res.json(returnVal);
      })
    }
  },

  //Accepts an event_id query and deletes that event
  deleteEvent: function(req, res, next) {
    var event_id = req.query.eventId;
    if(event_id === undefined) {
      return console.err("No eventId provided")
    }

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