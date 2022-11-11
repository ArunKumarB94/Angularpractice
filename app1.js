var nApp = angular.module('nApp',[]);
// nApp.controller('mController', ['$scope','$timeout',function($scope, $timeout){
//     $scope.name = 'Tony';

//     $timeout(function(){
//         $scope.name = 'Boby';
//     },3000);
// }]);

nApp.controller('mController',['$scope','$filter',function($scope,$filter){

    $scope.handle = '';
    $scope.lowerhandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    $scope.$watch('handle',function(newValue,oldValue){
        console.log('Changed');
        console.log('old' +oldValue);
        console.log('new'+newValue);
    })
}]);