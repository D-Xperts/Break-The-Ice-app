angular.module('break')
.controller('SignoutCtrl', function(UserAuth){
	console.log("HI");
	UserAuth.signout();
})