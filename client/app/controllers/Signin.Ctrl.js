angular.module('break')
.controller('signinCtrl', function($scope,$window, $location,UserAuth){
	$scope.signin = function(){
		console.log($scope.email, $scope.password);
		UserAuth.signin({
			email:$scope.email,
			password:$scope.password
		})
		.then(function(token){
			$window.localStorage.setItem('Break.The.Ice', token);
			$location.path('/')
		})
		.catch(function(err){
			console.error(err)
		})
	}
});