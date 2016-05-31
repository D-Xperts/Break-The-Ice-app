var mongoose = require('mongoose');

//See '../Model Specs.cd' for details on database schema
var EventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },  
  pic_url: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  users_att: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
  },
  owners: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    required: false,
  },
  creation_time: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('Event', EventSchema);