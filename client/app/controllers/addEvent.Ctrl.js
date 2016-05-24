angular.module('break')
.controller('addEventCtrl', function($scope,moment){
	$scope.newEvent = {};
	$scope.eventCategoriesObj = {
		Foods:false,
		Outdoors:false,
		Arts:false
	};





	$scope.minDatetimeLocal = Date.now();


	$scope.$watch('start_time', function(newValue, oldValue) {
  		$scope.end_time = $scope.start_time
	});
	console.log($scope.minDatetimeLocal);
	$scope.addEvent = function () {
		$scope.categories = Object.keys($scope.eventCategoriesObj).filter(function(key){
			return $scope.eventCategoriesObj[key]
		})
		$scope.newEvent = {
			event_name:$scope.event_name,
			location:$scope.location,
			pic_url:$scope.pic_url,
			description:$scope.description,
			start_time:$scope.start_time,
			end_time:$scope.end_time,
			categories: $scope.categories
		};
	}
})