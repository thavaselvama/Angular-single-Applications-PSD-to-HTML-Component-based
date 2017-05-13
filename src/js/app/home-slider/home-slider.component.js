'use strict';
angular.module("homeSlider", ['ui.bootstrap']).
component("homeSlider", {
    templateUrl: '/templates/home-slider.template.html',
    controller: function($scope) {
        $scope.myInterval = 3000;
        $scope.slides = [{
                image: '../images/1.jpg'
            },
            {
                image: '../images/2.jpg'
            },
            {
                image: '../images/3.jpg'
            },
            {
                image: '../images/4.jpg'
            }
        ]

    }
});