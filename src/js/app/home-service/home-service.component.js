'use strict';
angular.module("homeService", ['ui.bootstrap']).
component("homeService", {
    templateUrl: '/templates/home-service.template.html',
    controller: function($scope) {


        $scope.services = [{
            "title": "A little About Us",
            "link": "https://www.behance.net/thavaselvama",
            "Country": "Germany",
            "serviceimg": "../images/earth.jpg"
        }, {
            "title": "Some of Our Service",
            "link": "https://www.behance.net/thavaselvama",
            "Country": "Sweden",
            "serviceimg": "../images/service.jpg"
        }, {
            "title": "What Our Clients Say",
            "link": "https://www.behance.net/thavaselvama",
            "Country": "Mexico",
            "serviceimg": "../images/clients.jpg"
        }]
    }
});