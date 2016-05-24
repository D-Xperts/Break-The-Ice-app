angular.module('break')
.controller('signinCtrl', function($scope,$http){
	$scope.signin = function(){
		console.log($scope.alias, $scope.password);
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