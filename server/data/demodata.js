var eventController = require('./eventController.js');

var demoEvents = [];
demoEvent = loadData();

//Adds the demo data to the database
demoEvents.forEach(function(event) {
  eventController.createEvent({body: event});
});

//Function loads a set of hardcoded demo data
var loadData = function() {
  var dataArr = [];

  dataArr.push({
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

  dataArr.push({
    //_id: "",
    name: "Shakespeare in Zilker Park",
    location: "Zilker Hillside Theater, 2201 Barton Springs Road",
    startTime: new Date("2016 06 02 20:00:00"),
    endTime: new Date("2016 06 03 22:00:00"),
    picUrl: 'https://s-media-cache-ak0.pinimg.com/736x/d2/97/90/d29790e192c7d74b1b7cd95b003b75c8.jpg',
    categories: ["Outdoors", "Arts"],
    usersAtt: ['Ryan', 'James', 'Adam'],
    owners: ['Sin'],
    description: "The military-themed rendition of “Macbeth” continues all weekend as part of the annual Shakespeare in Zilker Park tradition. austinshakespeare.org.",
  });

  dataArr.push({
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

  dataArr.push({
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

  dataArr.push({
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

  dataArr.push({
    //_id: "",
    name: "Slipknot with Marilyn Manson",
    location: "Austin360 Amphitheater - 9201 Circuit of the Americas Blvd Del Valle, TX 78617",
    startTime: new Date("2016 06 24 18:30:00"),
    endTime: new Date("2016 06 06 23:00:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Marilyn_Manson_-_Rock_am_Ring_2015-8751.jpg',
    categories: ["Arts"],
    usersAtt: ['Ryan'],
    owners: ['Sin'],
    description: 'Slipknot were brought together by Paul and Shawn along with Anders Colsefni (ex-singer) in Des Moines, Iowa in 1995. The band has been through many changes since then to reach the current 9 member status it has now. Slipknot consider themselves as a family unit and each of the nine members are assigned a number between 0-8. The group mascarade the rock scene in their individual masks, each representing a personality, and there draping jumpsuits.',
  });

  dataArr.push({
    //_id: "",
    name: "First Friday Wine & Food Tasting June",
    location: "Whole Foods Domain - 11920 Domain Drive Austin, TX",
    startTime: new Date("2016 06 03 17:30:00"),
    endTime: new Date("2016 06 03 22:00:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Vin_Jaune.jpg',
    categories: ["Food"],
    usersAtt: ['Sin', 'Adam', 'Ryan'],
    owners: ['James'],
    description: 'Grab your friends and join us for the June First Friday! Come sip wine & delicious bites of food in each department around our store. Proceeds are donated to a different non-profit organization each month. June\'s selected charity is Happy Birthdays. This non-profit\'s mission is simple: "We know there are many children whose special day passes each year without being recognized. Our goal is to bring a little birthday joy to as many of them as possible." Let\'s cheers to providing happy birthdays this month! See you Friday.',
  });

  dataArr.push({
    //_id: "",
    name: "TX German Bier & Kase Festival",
    location: "Scholv Biergarten - 1607 San Jacinto Blvd Austin, TX",
    startTime: new Date("2016 06 04 17:00:00"),
    endTime: new Date("2016 06 04 23:00:00"),
    picUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/GravityTap.jpg',
    categories: ["Food"],
    usersAtt: ['Sin', 'James', 'Ryan'],
    owners: ['Adam'],
    description: 'The Austin Saengerrunde and HOPE Farmers Market have partnered up to combine the TX German Bier Festival and Austin\'s First Annual Grilled Käse (a.k.a. Cheese) Competition!\n\nThis year, our favorite craft breweries will once again showcase specialty German style bier and what better accompaniment than a Grilled Käse Competition!!! Local chefs, foodies, and cheese enthusiasts will compete for the title of "Best in Show" (Overall Favorite Choice) and "The BIG Cheese" (The Biggest and Best use of Cheese).',
  });

  dataArr.push({
    //_id: "",
    name: "Geeks Who Drink Pub Quiz with Anna Bee",
    location: "Kick Butt Coffee - 5775 Airport Blvd. Austin, TX 78785",
    startTime: new Date("2016 06 06 20:00:00"),
    endTime: new Date("2016 06 06 22:00:00"),
    picUrl: 'http://cdn2.bigcommerce.com/n-arxsrf/fhqhzj/product_images/uploaded_images/trivia-night-photo.jpg',
    categories: ["Food"],
    usersAtt: ['Adam', 'James', 'Ryan'],
    owners: ['James'],
    description: 'The Leslie Knope of Austin Quizmasters hosts a weekly pub quiz testing your knowledge of topics ranging from music to sports, American history to famous movie quotes.\nVoted the best trivia company in Austin, the quiz is ALWAYS free to play and successful contestants are rewarded with free drinks throughout the night, as well as gift cards for top ranking teams.',
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