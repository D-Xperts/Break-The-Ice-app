angular.module('break')
.controller('signin', function($scope,$http){
	$scope.signin = function(){
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