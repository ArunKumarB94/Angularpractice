/// <reference path="angular.js" />
var myApp = angular
    .module("myModule3", [])
    .controller("MyController3", function ($scope) {
        var employees = [
            { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 12000 },
            { firstName: "Jos", lastName: "Butler", gender: "Male", salary: 35000 },
            { firstName: "sara", lastName: "Taylor", gender: "Female", salary:10000 },
            { firstName: "Elysa", lastName: "Perry", gender: "Feale", salary: 77000 },
            { firstName: "Aaron", lastName: "Finch", gender: "Male", salary: 200000 },

        ];
        $scope.employees = employees;
        
    });

var mycontroller = function ($scope) {
    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Manchester" },
                { name: "Birmingham" }
            ]
        },
        {
            name: "Australia",
            cities: [
                { name: "Sydney" },
                { name: "Melbourne" },
                { name: "Perth" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Delhi" },
                { name: "Mumbai" },
                { name: "Bangalore" }
            ]
        }
    ];
    $scope.countries = countries;
};

myApp.controller("myController4", mycontroller);
