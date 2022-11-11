/// <reference path="angular.min.js" />
// <reference path="angular.js" />
var myApp2 = angular
    .module("MyModule2", [])
    .controller("myController2", function ($scope) {
        //$scope.message = "Hello Angular!";
        var employee = {
            firstName: "Ben",
            lastName: "Stokes",
            gender: "Male"
        };
        $scope.employee = employee;
    });