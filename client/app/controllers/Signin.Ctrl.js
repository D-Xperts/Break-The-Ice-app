angular.module('break')
.controller('signinCtrl', function($scope, $window, $location, $rootScope, UserAuth){
	$scope.signin = function(){
		// console.log($scope.email, $scope.password);
		UserAuth.signin({
			email:$scope.email,
			password:$scope.password
		})
		.then(function(token){
			$window.localStorage.setItem('Break.The.Ice', token);
			//need to set the token and set the header field
			$rootScope.token = token;
			$http.defaults.headers.common.Authorization = token;
			$location.path('/')
		})
		.catch(function(err){
			console.error(err)
		})
	}
});