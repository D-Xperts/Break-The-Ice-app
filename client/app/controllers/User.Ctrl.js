angular.module('break')
.controller('UserCtrl', function($scope){
	$scope.user = {
		pic_url : 'http://vignette2.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436',
		alias : 'Grey-all-day',
		hometown : "Austin",
		email: "Greybeard@hobbithole.me",
		first_name: "Gandy",
		last_name: "Mithrandir",
		interests : ['food']
	};
})