angular.module('break')
.controller('signinCtrl', function($scope, $window, UserAuth){
	$scope.signin = function(){
		UserAuth.signin({
			email:$scope.email,
			password:$scope.password
		})
		.then(function(token){
			UserAuth.setToken(token);
		})
		.catch(function(err){
			console.error(err)
		})
	}
});