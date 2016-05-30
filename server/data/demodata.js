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

  dataArr.push(
  var request.body = {
    //_id: "",
    name: "Shakespeare in Zilker Park",
    location: "Zilker Hillside Theater, 2201 Barton Springs Road",
    startTime: new Date("2016 06 02 20:00:00"),
    endTime: new Date("2016 06 03 22:00:00"),
    picUrl: 'https://s-media-cache-ak0.pinimg.com/736x/d2/97/90/d29790e192c7d74b1b7cd95b003b75c8.jpg',
    categories: ["Outdoors"],
    usersAtt: ['Ryan', 'James', 'Adam'],
    owners: ['Sin'],
    description: "The military-themed rendition of “Macbeth” continues all weekend as part of the annual Shakespeare in Zilker Park tradition. austinshakespeare.org.",
  });

  dataArr.push(
  var request.body = {
    //_id: "",
    name: "Yoga at Sustainable Food Center Farmers’ Market",
    location: "Republic Square Park, 400 W. Guadalupe St.",
    startTime: new Date("2016 06 04 10:30:00"),
    endTime: new Date("2016 06 04 11:30:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Project_Yoga_Richmond_1.jpg',
    categories: ["Outdoors"],
    usersAtt: ['Ryan', 'Sin', 'Adam'],
    owners: ['James'],
    description: "Join Yoga Illumined Studio at the SFC Farmers’ Market Downtown for an hour-long yoga class to start your weekend. Bring your own yoga mat. Afterwards, grab a fresh snack from the market’s vendors.",
  });

  dataArr.push(
  var request.body = {
    //_id: "",
    name: "5th Annual Givin' and Golfin' Golf Tournament",
    location: "Cimarron Hills Golf Course - 200 Cimarron Trail West Georgetown, TX 78628",
    startTime: new Date("2016 06 27 08:00:00"),
    endTime: new Date("2016 06 27 14:00:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/JackNicklaus2006MastersPar3.jpg',
    categories: ["Outdoors"],
    usersAtt: ['Ryan', 'Sin', 'James'],
    owners: ['Adam'],
    description: 'Williamson County Brown Santa program is holding its 5th Annual Givin’ and Golfin’ Golf Tournament and silent auction on June 27th. This year we will be in a new venue, the award-winning Jack Nicklaus Signature Golf Course at Cimarron Hills in Georgetown.\nRegistration includes 18 holes of golf, cart, range balls, breakfast, lunch, gift bag, and two beverage tickets. Discounts are available with Military ID.',
  });

  dataArr.push(
  var request.body = {
    //_id: "",
    name: "Farmer For A Day Camp",
    location: "Green Gate Farms - 8310 Canoga Lane Austin, TX 78724",
    startTime: new Date("2016 06 06 09:00:00"),
    endTime: new Date("2016 06 06 15:00:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Little_kids.JPG',
    categories: ["Outdoors"],
    usersAtt: ['Ryan', 'James'],
    owners: ['Sin'],
    description: 'Have a day off from school and don’t want to lay around watching videos? Come to Farm Camp at Green Gate Farms!\n\nAt Farm Camp, children ages 5-15 learn firsthand where their food comes from. Activities include planting and harvesting, taking care of animals, presentations from area experts, cooking classes, learning about sustainability, and plenty of time to relax, enjoy and explore the farm.\n\nChildren get to explore the farm and assist farmers as they work in the fields and tend to our newborn livestock, pony, pigs, sheep, goats and chickens',
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