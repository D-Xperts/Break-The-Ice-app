var Event = require('./eventModel.js');

module.exports = {
  createEvent: function(req, res, next) {
    var newEvent = new Event({
      event_name : req.body.name;
      location   : req.body.location;
      start_time : req.body.startTime;
      end_time   : req.body.endTime;
      pic_url    : req.body.picUrl;
      categories : req.body.categories;
      users_att  : req.body.usersAtt;
      owners     : req.body.owners;
      description: req.body.description;
    });

    newEvent.save(function (err, newEvent) {
      if(err) { return console.error(err); }
    });
  },

  //To do: Accept an object argument and filter based on it
  getEvents: function() {
    Event.find(function (err, events) {
      if(err) { return console.error(err); }
      return events;
    })
  },

  //Unsure if syntax is correct, need to confirm
  deleteEvent: function(event_id) {
    Event.findByIdAndRemove(event_id, function(err) {
      if(err) {
        return throw err;
      }
      return null;
    });
  },

  editEvent: function(event) {
    Event.findByIdAndUpdate(event.id, {
      event_name : event.name;
      location   : event.location;
      start_time : event.startTime;
      end_time   : event.endTime;
      pic_url    : event.picUrl;
      categories : event.categories;
      users_att  : event.usersAtt;
      owners     : event.owners;
      description: event.description;
    }, 
    function (err, event) {
      //if event does not exist
      if(err) { throw err }
    })
  }
};