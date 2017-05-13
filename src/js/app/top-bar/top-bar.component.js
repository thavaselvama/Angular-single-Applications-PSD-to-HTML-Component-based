'use strict';
angular.module("topBar").
component("topBar", {
    templateUrl: '/templates/top-bar.template.html',
    controller: function($scope) {


        var blogItems = [
            { name: "SignUp" },
            { name: "Login" },
            { name: "RSSFeeds" },
            { name: "ArchivedNews" }
        ]
        $scope.items = blogItems;



    }
});