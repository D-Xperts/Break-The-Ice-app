angular.module('break')


.controller('EventCtrl',function($scope){

	$scope.event = {

		title : "X-games Austin",
    	img : 'http://cdn.bmx.transworld.net/wp-content/blogs.dir/444/files/2016/02/2006-x-games12-dirt.jpg', 
    	description : "A festival that highlights the intersection of sports and lifestyle that exists in action sports", 
     	users_att : ['Sin','James','Adam'], 
     	owners:['ryan'],
     	creation_time: new Date("2016 05 28 21:00:00"),
     	start_time: new Date("2016 06 02 13:00:00"),
     	end_time: new Date("2016 06 03 18:00:00"),
     	categories : ["Outdoors"],
    	messages : {	
    		event_id :   1,
    		 messages : [
 				{user_id :  1,
  				msg :  "",
  				time : "" , 
  				Date : 01/01/16}
  			]
		}
	}
})

