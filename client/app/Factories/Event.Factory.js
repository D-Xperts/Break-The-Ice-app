angular.module('break')

.factory('Event', function($http){

var addEvent = function(event){
	return $http({
		method:"POST",
		url:"/api/v1/events",
		data: event
	})
}



return {addEvent: addEvent}
})