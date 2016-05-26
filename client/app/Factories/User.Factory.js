angular.module('break')
.factory('UserAuth', function($http,$location,$window,$rootScope){
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
	};
	var setToken = function(token){
		//use the token to notify $rootScope user had logged in
		$rootScope.token = token;
		$window.localStorage.setItem('Break.The.Ice', token);
		$http.defaults.headers.common.Authorization = token;
		$location.path('/');
	};
	return {
		signin:signin,
		signout:signout,
		register:register,
		setToken:setToken
	}

})