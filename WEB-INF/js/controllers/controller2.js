

app.controller('second', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.welcome = 'Welcome to my profile';
    
    $timeout(function(){
    	$scope.welcome='Hope you will like it!';
    },3000);
    
}]);
