// // MODULE
// var angularApp = angular.module('angularApp', []);

// // CONTROLLERS
// angularApp.controller('mainController', ['$scope', function ($scope) {
    
// }]);

var myApp = angular.module('myApp',['ngMessages']);

myApp.controller('mainController',function($scope, $log, $filter){
    $scope.name = 'Hi';
    $scope.occupation = 'ASE';
    $scope.fname = $filter('uppercase')($scope.name);

    $log.info($scope.fname);
    $scope.getname = function() {
        return 'John Doe';
    }

    $scope.getname();

    console.log($scope);
    
});


var sp = function searchPeople(fname, lname, height, age){
    return 'Jane';
}
console.log(sp);
console.log(angular.injector().annotate(sp));
// var Person = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// function logPerson(){
//     var john = new Person('John', 'Joe');
//     console.log(john);
// }

//Dependency Injection
// function logPerson(person){
//     console.log(person);
// }
// var john = new Person('John', 'Joe');
// logPerson(john);