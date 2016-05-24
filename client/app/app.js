angular.module('break',['angularMoment', 'ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/Views/landing.html',
      controller: 'landing'
    })
    .when('/signin', {
      templateUrl: 'app/Views/signin.html',
      controller: 'signin'
    })
    .when('/signup', {
      templateUrl: 'app/Views/signup.html',
      controller: 'signup'
    })
    .when('/event', {
      templateUrl: 'app/Views/EventView.html',
      controller: 'EventCtrl'
    })
    .when('/addEvent', {
      templateUrl: 'app/Views/addEvent.html',
      controller: 'addEvent'
    })
    .when('/user', {
      templateUrl: 'app/Views/UserView.html',
      controller: 'UserCtrl'
    })
})