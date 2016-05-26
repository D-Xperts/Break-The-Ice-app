angular.module('break')
.factory('UserAuth', function($http){
	var signin = function(user){
		//user {email:"", password:""}
		return $http({
			method:"POST",
			url:"/api/v1/users/login",
			data:user
		})
		.then(function(resp){
			return resp.data.token
		})
	};
	var register = function(user){
		// user {
		// 	    "email":"",
		// 	    "password":"",
		// 	    "first_name":"",
		// 	    "last_name":"",
		// 	    "alias":"",
		// 	    "hometown":"",
		// 	    "interests":["array of strings"],
		// 	    "pic_url":""
		// 	}
		$http({
			method:"POST",
			url:"/api/v1/users/register",
			data:user
		})
		.then(function(resp){
			return resp.data.token
		})
	};
	return {
		signin:signin,
		register:register
	}

})