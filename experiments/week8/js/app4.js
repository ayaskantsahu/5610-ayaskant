var app = angular.module('RestCentralApp', ['ngRoute', 'ngCookies']);
var applications = [];
var possibleTypes = ["GET", "POST"];


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

app.controller('AddAppController', function ($scope, RestCentralService, $location) {

    var application = {};
    application.name = "";
    application.url = "";
    application.type = "";
    $scope.possibleTypes = possibleTypes;
    $scope.application = application;
    $scope.message = 'This is Add new application screen';
    $scope.saveApplication = function (application) {
        applications.push(application);
        $location.path("/view");
    };

});


app.controller('ViewAppController', function ($scope, RestCentralService, $location) {
    $scope.applications = applications;

    $scope.removeApplication = function (appId) {
        RestCentralService.removeApplication(appId).then(function (result) {
            getData();
        });
    };

    $scope.edit = function (appId) {
        $location.path("editApp/" + appId);
    }
});

angular.module('RestCentralApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider

		.when('/addApp', {
		    templateUrl: 'views/AddApp.html',
		    controller: 'AddAppController'
		})
		.when('/login', {
		    templateUrl: 'views/login.html'
		})
        .when('/view', {
            templateUrl: 'views/ViewAllApps.html',
            controller: 'ViewAppController'
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
