var app = angular.module('InfoCommonsApp', ['ngRoute','ui.bootstrap']);
var roles = ["Printing", "Help Desk 1", "Help Desk 2", "Help desk 3", "Floater", "DMC 1", "DMC 2"];


app.controller('parentController', function($scope, RestCentralService, $window) {
    $scope.logOut = function(){
        RestCentralService.logOut();
        $window.location.href = "/login";
    }
});

app.controller('AssignRoleController', function($scope, RestCentralService, $location) {
    $scope.data = [];
    $scope.users = [];
    $scope.roles = roles;
    $scope.assignments = {};
    var currentTime;
    $scope.getStaffAssignment = function(){
        RestCentralService.getStaffAssignment($scope.selectedDate).then(function(result) {
            $scope.data = result.staff;
        });
    }
    
    $scope.populateAssignment = function(time){
        currentTime = time;
        var users = $scope.data[time];
        $scope.users = users;
    }
    
    $scope.saveShiftAssignment = function(){
        var assignment = $scope.assignments;
        var data = [];
        for(key in assignment)
        {
            data.push({userId : assignment[key], role : key, time : currentTime});
        }
        RestCentralService.saveShiftAssignment(data).then(function(result) {
            console.log(result);
        });
    }
});


app.controller('AllStaffController', function($scope, RestCentralService, $location) {
    $scope.getStaff = function(name){
        return RestCentralService.getStaff(name).then(function(result){
            var names = [];
            for(var i=0; i< result.length; i++)
            {
                names.push({name : result[i].first_name + " "+result[i].last_name, data : result[i]});
            }
            return names;
        });
    }
});

app.controller('SingleUserController', function($scope, RestCentralService, $routeParams) {
    
});

app.controller('DashboardController', function($scope, RestCentralService, $routeParams){
   
});