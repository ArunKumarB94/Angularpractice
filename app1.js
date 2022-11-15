// var nApp = angular.module('nApp',[]);
// // nApp.controller('mController', ['$scope','$timeout',function($scope, $timeout){
// //     $scope.name = 'Tony';

// //     $timeout(function(){
// //         $scope.name = 'Boby';
// //     },3000);
// // }]);

// nApp.controller('mController',['$scope','$filter',function($scope,$filter){

//     $scope.handle = '';
//     $scope.lowerhandle = function(){
//         return $filter('lowercase')($scope.handle);
//     };
//     // $scope.$watch('handle',function(newValue,oldValue){
//     //     console.log('Changed');
//     //     console.log('old' +oldValue);
//     //     console.log('new'+newValue);
//     // })
//     $scope.characters = 5;

//     // $scope.rules = [
//     //     {rulename: "Must be 5 characters"},
//     //     {rulename: "Must not be used elsewhere "},
//     //     {rulename: "Must be cool"}
//     // ];

    
// }]);

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
myApp.directive("searchResult", function(){
    return {
        template: '<a href="#" class="list-group-item list-group-item-action active" aria-current="true"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">Doe, John</h5><small>3 days ago</small></div><p class="mb-1">455 Main St. </p><small>And some small print.</small></a>',
        replace: true
    }
})