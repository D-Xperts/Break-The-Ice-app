angular.module('break',['angularMoment', 'ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/Views/landing.html',
      controller: 'landingCtrl'
    })
    .when('/signin', {
      templateUrl: 'app/Views/signin.html',
      controller: 'signinCtrl'
    })
    .when('/signup', {
      templateUrl: 'app/Views/signup.html',
      controller: 'signupCtrl'
    })
    .when('/event', {
      templateUrl: 'app/Views/EventView.html',
      controller: 'EventCtrl'
    })
    .when('/addEvent', {
      templateUrl: 'app/Views/addEvent.html',
      controller: 'addEventCtrl'
    })
    .when('/user', {
      templateUrl: 'app/Views/UserView.html',
      controller: 'UserCtrl'
    })
    .when('/logout', {
        controller:'SignoutCtrl'
    })
    .otherwise({redirectTo:'/'})
})
.run(function($rootScope, $http, $window){
  var token = $window.localStorage.getItem('Break.The.Ice');
  if (token){
    $rootScope.token = token;
    $http.defaults.headers.common.Authorization = token;
  }
})