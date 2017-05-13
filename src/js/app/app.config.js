'use strict';
angular.module("myApp").
config(
    function(
        $locationProvider,
        $routeProvider
    ) {
        $locationProvider.html5Mode({
            enabled: true
        })
        $routeProvider.
        when("/", {
            template: "<home-full></home-full>"
        }).
        when("/about", {
            template: "<about-us></about-us>"
        }).
        when("/service", {
            template: "<main-home-service></main-home-service>"
        }).
        when("/blog/:id/:abc", {
                template: "<blog-list></blog-list>"
            }).
            // when("/blog/:id/:abc ", {
            //     template: "<blog-list></blog-list>"
            // }).
        otherwise({
            template: "<page-not></page-not>"
        })
    });