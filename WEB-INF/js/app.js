var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'WEB-INF/pages/main.html',
        controller: 'mainController',
    })
    
/*    .when('/Contact', {
        templateUrl: '/WEB-INF/pages/contact.html',
        controller: 'second'
    })*/
    
    .when('/A4', {
        templateUrl: '/WEB-INF/pages/A4.html',
        controller: 'second'
    })
    .when('/About', {
        templateUrl: '/WEB-INF/pages/About.html',
        controller: 'second'
    })
    .when('/Education', {
        templateUrl: '/WEB-INF/pages/Education.html',
        controller: 'second'
    })
    .when('/Experience', {
        templateUrl: '/WEB-INF/pages/Experience.html',
        controller: 'second'
    })
    .when('/Projects', {
        templateUrl: '/WEB-INF/pages/Projects.html',
        controller: 'second'
    })
    .when('/Volunteer', {
        templateUrl: '/WEB-INF/pages/Volunteer.html',
        controller: 'second'
    })
    .when('/Achievements', {
        templateUrl: '/WEB-INF/pages/Achievements.html',
        controller: 'second'
    })
    
    
});


app.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    $scope.thanks="";
    var Sending=function(){
    console.log("In sending");
    $scope.thanks=" Thanks for sending your feedback";
}
    
}]);


