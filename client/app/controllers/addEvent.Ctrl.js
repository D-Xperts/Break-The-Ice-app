angular.module('break')
.controller('addEventCtrl', function($scope,$location,moment,Event){
	$scope.newEvent = {};
	$scope.eventCategoriesObj = {
		Foods:false,
		Outdoors:false,
		Arts:false
	};

	$scope.minDatetimeLocal = Date.now(); //use for restricting start time in the future

	//auto set/prefill end time
	$scope.$watch('start_time', function(newValue, oldValue) {
		$scope.end_time = $scope.start_time
	});

	$scope.addEvent = function () {
		$scope.categories = Object.keys($scope.eventCategoriesObj).filter(function(key){
			return $scope.eventCategoriesObj[key]
		});

		$scope.newEvent = {
			name:$scope.event_name,
			location:$scope.location,
			picUrl:$scope.pic_url,
			description:$scope.description,
			startTime:$scope.start_time.getTime(),
			endTime:$scope.end_time.getTime(),
			categories: $scope.categories
		};
		//add event 
		Event.addEvent($scope.newEvent)
		.then(function(resp){
			$location.path('/')
		})
		.catch(function(err){
			console.log(err)
		})
	}
})