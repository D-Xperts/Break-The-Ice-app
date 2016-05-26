angular.module('break')
.factory('UserAuth', function($http,$location,$window){
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
		return $http({
			method:"POST",
			url:"/api/v1/users/register",
			data:user
		})
		.then(function(resp){
			return resp.data.token
		})
	};
	var signout = function () {
		console.log('UserAuth signout');
		$window.localStorage.removeItem('Break.The.Ice');
		$location.path('/')
	}
	return {
		signin:signin,
		signout:signout,
		register:register
	}

})