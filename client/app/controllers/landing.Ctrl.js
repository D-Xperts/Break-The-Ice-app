angular.module('break') 
.controller('landingCtrl', function($scope,$location,$http,moment){
    $scope.featured = [];
    $scope.title = "Break the ice";
    $scope.text = "landing controller for angular";
    $scope.categories = [];

    $scope.events = null;
    $http({
        method:"GET",
        url:"/api/v1/events/"
    })
    .then(
        function(resp){
            //success
            $scope.events = resp.data;
            $scope.events.forEach(function(event){
                event.timeFromNow = moment(event.start_time).fromNow();
                event.startInHour = parseInt(moment(event.start_time).diff(Date.now(),'hours')); //usful for events starting soon
                event.categories.forEach(function(category){
                    if ($scope.categories.indexOf(category)===-1){
                        $scope.categories.push(category);
                    }
                });
            });
            $scope.orderedEvents = $scope.events.slice();
            $scope.orderedEvents = $scope.orderedEvents.sort(function(a,b){
                return a.startInHour - b.startInHour
            })
            $scope.featured = $scope.orderedEvents.slice(0,3);
            console.log('line 31', $scope.events)

        },
        function(err){
            //fail
            console.error(err)
        }
    );

    $scope.goToEvent = function(_id){
        $location.path("/event/"+_id)
    }





    // $scope.events = [
    // {
    //     _id: "57486d020933899c1a268fdf",
    //     title : "X Games Austin",
    //     img : 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg', 
    //     description : "A festival that highlights the intersection of sports and lifestyle that exists in action sports",
    //     users_att : ['Sin','James','Adam'],
    //     owners:['ryan'],
    //     creation_time: new Date("2016 05 28 21:00:00"),
    //     start_time: new Date("2016 06 02 13:00:00"),
    //     end_time: new Date("2016 06 03 18:00:00"),
    //     categories : ["Outdoors"]
    // }
    // ];

})