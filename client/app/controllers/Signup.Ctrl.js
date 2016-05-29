angular.module('break')
.controller('signupCtrl', function($scope, UserAuth){
	$scope.interests ={
		Food:false,
		Outdoors:false,
		Music:false
	};

	$scope.signup = function(){
		// construct interests array
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
		UserAuth.register(data)
		.then(function(token){
			UserAuth.setToken(token)
		})
		.catch(function(err){
			console.error(err)
		})
	}
});