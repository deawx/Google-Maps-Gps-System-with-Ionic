
// var myapp = angular.module('starter', ['ionic'])

myapp.controller("mapController", function($scope){
//display the map ============================================
	$scope.directionsService = new google.maps.DirectionsService;
 	$scope.directionsDisplay = new google.maps.DirectionsRenderer;
 	$scope.map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 7,
    	center: {lat: 41.85, lng: -87.65}
  	});
	$scope.directionsDisplay.setMap($scope.map);
 	$scope.start = document.getElementById('start');
 	$scope.end = document.getElementById('end');
	$scope.searchWrap = document.getElementById('searchWrap')

//auto complete service on input fields  =====================
	

//listen to the autocomplete event       =====================

   	$scope.reloadRoute = function(){
   		window.location.reload();
   	}
	$scope.calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
		$scope.orgin = $scope.start.value;
		$scope.destination = $scope.end.value;
  		$scope.directionsService.route({
	    	origin: $scope.orgin,
	    	destination: $scope.destination,
	    	travelMode: google.maps.TravelMode.DRIVING

	}, function(response, status) {
	    if (status === google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	      console.log("response",response)

	      $scope.response = response;

	      $scope.$apply()
	    }
	});
	}
})