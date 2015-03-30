var app = angular.module('RestCentralApp', ['ngRoute']);


app.controller('parentController', function($scope, $window) {

});

angular.module('RestCentralApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider

		.when('/addApp', {
		    templateUrl: 'views/AddApp.html'
		})
		.when('/login', {
		    templateUrl: 'views/login.html'
		})
        .when('/home', {
            templateUrl: 'Experiment1.html',
            controller: 'parentController'
        });

}]);
