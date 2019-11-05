var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
	
	$scope.khuyenmaisoc = listkhuyenmaisoc;
	
	$scope.dienthoainoibatnhat = listdienthoainoibatnhat;
	
	$scope.laptopnoibatnhat = listlaptopnoibatnhat;
	
//	$scope.tabletnoibatnhat = [];
//	$http.get("js/httptabletnoibat.js").then(function(response){
//		$scope.tabletnoibatnhat = response.data;
//	});
	
});