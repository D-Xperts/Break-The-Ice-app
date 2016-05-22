angular.module('break')
.controller('signup', function($scope,$http){
	$scope.signup = function(){
		console.log($scope.username, $scope.password);
		// $http({
		// 	method:"POST",
		// 	url:"/endpoint",
		// 	data:{
		// 		username:$scope.username,
		// 		password:$scope.password
		// 	}
		// }).then(function(resp){
		// 	//success login function
		// 	//redirect to landing page
		// }, function(resp){
		// 	// login fail funciton
		// })
	}
});