# Break-The-Ice-app
Web app to find others going to a local event

##Team Members
- [James Fitzpatrick](https://github.com/Fitzpatrick1)
- [Sin Ko](https://github.com/scko823)
- [Ryan Newton](https://github.com/ryannewton)
- [Adam Smith](https://github.com/AdamSmith910)

###Setup Instructions
After cloning the repo, run the follow
```javascript
npm install
```
And then
```javascript
bower install
```
After installing all the dependencies, run the sever by running
```javascript
npm start
```


###Technology Stack
This web app is powered by the MEAN stack
####Front End
Front end is structured as a [Signle Page Application](https://en.wikipedia.org/wiki/Single-page_application) using [Augular](https://angularjs.org/).

######Views
There are six partial views under /client/app/Views
* addEvent - adding an event
* event - fetching and displaying one event
* landing - landing page, fetching and displaying all events
* signin - signin page
* signup - signup page
* user - display user info

######Controllers
Each view has its own controller under /client/app/controllers.

######Factories
There are two factories under /client/app/Factories
* Event
* UserAuth

Event factory should handle all backend api call about events.
UserAuth factory should handle all backend api call about signin/signout.

######$rootScope/security
This app utilize broswer's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and Angular's [$rootScope](https://docs.angularjs.org/api/ng/service/$rootScope) to verify and display navbar options based on if a user is signed in.
Once a user is signed in, Angular store the jwt token in the browser's local storage, and all requests send from the user will have the token attached in the header's Authorization field. For details, see [$http documentation, the section setting HTTP Headers](https://docs.angularjs.org/api/ng/service/$http).
In addition, only signin view, signup view and the landing page view is visibile for users not signed in.

######Todos
* refactor EventCtrl and landingCtrl to use Event factory method

###Features to be implemented
* Reward points to users for joining events
* Joining events
