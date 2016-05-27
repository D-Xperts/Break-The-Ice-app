angular.module('break')
.controller('addEventCtrl', function($scope,$location,moment,Event){
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
		});
		console.log($scope.start_time);
		$scope.newEvent = {
			name:$scope.event_name,
			location:$scope.location,
			picUrl:$scope.pic_url,
			description:$scope.description,
			startTime:$scope.start_time.getTime(),
			endTime:$scope.end_time.getTime(),
			categories: $scope.categories
		};
		Event.addEvent($scope.newEvent)
		.then(function(response){
			console.log(response.data)
			$location.path('/')
		})
		.catch(function(err){
			console.log(err)
		})
	}
})