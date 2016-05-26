angular.module('break')
.controller('signinCtrl', function($scope,$http){
	$scope.signin = function(){
		console.log($scope.email, $scope.password);
		// $http({
		// 	method:"POST",
		// 	url:"/endpoint",
		// 	data:{
		// 		email:$scope.email,
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