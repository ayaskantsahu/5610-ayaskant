var app = angular.module('RestCentralApp', ['ngRoute']);


app.controller('parentController', function ($scope, RestCentralService, $window) {
    $scope.logOut = function(){
        RestCentralService.logOut();
        $scope.loggedIn = false;
        $window.location.href = "#/login";
    }

    $scope.login = function () {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        if (RestCentralService.login(username, password)) {
            $scope.loggedIn = true;
        }
    }
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

angular.module('RestCentralApp').service(
            "RestCentralService",
            function ($http, $q) {

                // Return public API.
                return ({
                    login: login,
                    logOut: logOut
                });

                // ---
                // PUBLIC METHODS.
                // ---

                function logOut() {
                    
                };

                function login(username, password) {
                    if(username == "user" && password == "password"){
                        return true;
                    }
                    else
                        return false;
                };
            }
        );
