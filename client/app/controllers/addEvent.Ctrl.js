angular.module('break')
.controller('addEvent', function($scope){
	$scope.text ="Text";
	$scope.eventCategoriesObj = {
		Foods:false,
		Outdoors:false,
		Arts:false
	};
	$scope.addEvent = function () {
		$scope.categories = Object.keys($scope.eventCategoriesObj).filter(function(key){
			return $scope.eventCategoriesObj[key]
		})
		console.log('event_name', $scope.event_name);
		console.log('location', $scope.location);
		console.log('pic_url', $scope.pic_url);
		console.log('description', $scope.description);
		console.log('start_time', $scope.start_time);
		console.log('end_time', $scope.end_time);
		console.log('categories', $scope.categories);
	}
})