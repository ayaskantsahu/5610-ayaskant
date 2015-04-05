var app = angular.module('RestCentralApp', ['ngRoute', 'ngCookies']);


app.controller('parentController', function ($scope, RestCentralService, $window, $cookieStore) {
    $scope.loggedIn = $cookieStore.get('loggedIn');
    $scope.logOut = function () {
        RestCentralService.logOut();
        $cookieStore.put('loggedIn', false);
        $scope.loggedIn = $cookieStore.get('loggedIn')
        $window.location.href = "#/login";
    }

    $scope.login = function () {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        if (RestCentralService.login(username, password)) {
            $cookieStore.put('loggedIn', true);
            $scope.loggedIn = $cookieStore.get('loggedIn')
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
                    if (username == "user" && password == "password") {
                        return true;
                    }
                    else
                        return false;
                };
            }
        );
