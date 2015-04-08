angular.module('InfoCommonsApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/assignRole', {
			templateUrl: 'views/AssignRole.html',
			controller: 'AssignRoleController'
		})
		.when('/viewAll', {
			templateUrl: 'views/AllStaffView.html',
			controller: 'AllStaffController'	
		})
		.when('/viewStaff', {
			templateUrl: 'views/SingleUserView.html',
			controller: 'SingleUserController'	
		})
		.when('/dashboard', {
			templateUrl: 'views/Dashboard.html',
			controller: 'DashboardController'	
		})
		.when('/viewTimeRange', {
			templateUrl: 'views/TimeRangeView.html',
			controller: 'TimeRangeController'	
		})
		.otherwise({
			redirectTo: '/dashboard'
		});

	$locationProvider.html5Mode(true);

}]);