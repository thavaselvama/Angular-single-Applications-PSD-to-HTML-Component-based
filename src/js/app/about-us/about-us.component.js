'use strict';
angular.module("aboutUs", []).
component("aboutUs", {
    templateUrl: '/templates/about-us.template.html',
    controller: function($scope) {


        $scope.footers = [{
                "title": "A little About Us",
                "link": "https://www.behance.net/thavaselvama",
                "Country": "Germany",
                "serviceimg": "../images/earth.jpg"
            },
            {
                "title": "Some of Our Service",
                "link": "https://www.behance.net/thavaselvama",
                "Country": "Sweden",
                "serviceimg": "../images/service.jpg"
            }
        ]
    }
});