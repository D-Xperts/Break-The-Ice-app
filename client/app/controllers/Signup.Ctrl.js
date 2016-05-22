angular.module('break')
.controller('signup', function($scope,$http){
	$scope.interests ={
		Food:false,
		Outdoors:false,
		Music:false
	}

	$scope.signup = function(){
		// var interests = [];
		var interests = Object.keys($scope.interests).filter(function(interest){
			return $scope.interests[interest]
		});
		var data = {
			alias:$scope.alias,
			password:$scope.password,
			email:$scope.email,
			first_name:$scope.first_name,
			last_name:$scope.last_name,
			hometown:$scope.hometown,
			pic_url:$scope.pic_url,
			interests:interests
		};
		// console.log(data);
		// $http({
		// 	method:"POST",
		// 	url:"/endpoint",
		// 	data:data
		// }).then(function(resp){
		// 	//success login function
		// 	//redirect to landing page
		// }, function(resp){
		// 	// login fail funciton
		// })
	}
});