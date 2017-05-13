'use strict';
angular.module("menuBar", ['ui.bootstrap']).
component("menuBar", {
    templateUrl: '/templates/menu-bar.template.html',
    controller: function($scope) {
        $scope.name = 'World';
        $scope.isCollapsed = true;


    }
});