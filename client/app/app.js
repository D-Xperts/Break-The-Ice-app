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
      controller: 'EventCtrl',
      authenticate:true
    })
    .when('/addEvent', {
      templateUrl: 'app/Views/addEvent.html',
      controller: 'addEventCtrl',
      authenticate:true
    })
    .when('/user', {
      templateUrl: 'app/Views/UserView.html',
      controller: 'UserCtrl',
      authenticate:true
    })
    .when('/logout', {
        controller:'SignoutCtrl'
    })
    .otherwise({redirectTo:'/'})
})
.run(function($rootScope, $http, $window, $location){
  var token = $window.localStorage.getItem('Break.The.Ice');
  if (token){
    $rootScope.token = token;
    $http.defaults.headers.common.Authorization = token;
  }
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.token == null) {
        // no logged user
        if ( next.templateUrl === "app/Views/signin.html") {
          $location.path("/signin");
        } else if ( next.templateUrl === "app/Views/signup.html") {
          $location.path("/signup");
        }else if ( next.templateUrl === "app/Views/landing.html") {
          $location.path("/");
        }else{
          $location.path("/signin");
        }
        
      }
  });
});