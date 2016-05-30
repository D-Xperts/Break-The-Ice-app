var eventController = require('./eventController.js');

var demoEvents = [];
demoEvent = loadData();

//Adds the demo data to the database
demoEvents.forEach(function(event) {
  eventController.createEvent(event);
});

//Function loads a set of hardcoded demo data
var loadData = function() {
  var dataArr = [];
  dataArr.push(
  var request.body = {
    //_id: "57484f8327b8d7460f0b3bb5",
    name: "X-games Austin",
    location: "Heart of Austin",
    startTime: new Date("2016 06 02 13:00:00"),
    endTime: new Date("2016 06 03 18:00:00"),
    picUrl: 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg',
    categories: ["Outdoors"],
    usersAtt: ['Sin', 'James', 'Adam'],
    owners: ['ryan'],
    description: "A festival that highlights the intersection of sports and lifestyle that exists in action sports",
  });
  return dataArr;
}

    // creation_time: new Date("2016 05 28 21:00:00"),
    // messages: {
    //   event_id: 1,
    //   messages: [{
    //     user_id: 1,
    //     msg: "Hello World",
    //     time: new Date("2016 05 02 13:00:00")
    //   }, {
    //     user_id: 2,
    //     msg: "Hello Planet",
    //     time: new Date("2016 04 02 13:00:00")
    //   }, {
    //     user_id: 3,
    //     msg: "Hello floating rock",
    //     time: new Date("2016 03 02 13:00:00")
    //   }]
    // }