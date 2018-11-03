angular.module('Cambridge', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage']);
 
angular.module('Cambridge').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  
 
    $routeProvider.when('/', {
        templateUrl: '/templates/Home.html',
        controller: 'HomeController'
    })
    .when('/About/Members', {
        templateUrl: '/templates/Members.html',
        controller: 'RegisterController'
    });
    .when('/About/POA Board', {
        templateUrl: '/templates/POA_Board.html',
        controller: 'RegisterController'
    });
    .when('/About/Bylaws', {
        templateUrl: '/templates/Bylaws.html',
        controller: 'RegisterController'
    });
    .when('/About/Covenant', {
        templateUrl: '/templates/Covenant.html',
        controller: 'RegisterController'
    });
    .when('/Events', {
        templateUrl: '/templates/Events.html',
        controller: 'RegisterController'
    });
    .when('/Photos', {
        templateUrl: '/templates/Reservations.html',
        controller: 'RegisterController'
    });
    .when('/Contact', {
        templateUrl: '/templates/Contact.html',
        controller: 'RegisterController'
    });
});