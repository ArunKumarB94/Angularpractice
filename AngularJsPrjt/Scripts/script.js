/// <reference path="angular.min.js" />

//create the module
//var myApp = angular.module("myModule", []);

//create the controller
//var myController = function ($scope) {
//    //$scope.message = "AngularJS Tutorial";
//    var employee = {
//        firstName: "David",
//        lastName: "Shefard",
//        gender: "Male"
//    };
//    $scope.employees = employee;
//};

//It also works........................
//create the controller and registering with the module all done in one line
//myApp.controller("myController", function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//});


//register the controller with module
//myApp.controller("myController", myController);



//creating module controller everthing in one.....
//var myApp = angular
//    .module("myModule", [])
//    .controller("myController", function ($scope) {
//        var employee = {
//            firstName: "David",
//            lastName: "Shefard",
//            gender: "Male"
//        };
//        $scope.employees = employee;
//    });

var myApp1 = angular
    .module("MyModule1", [])
    .controller("myController1", function ($scope) {
        var country = {
            name: "India",
            capital: "Delhi",
            flag: "/Images/IndianFlag.jfif"
        };
        $scope.country = country;
    });