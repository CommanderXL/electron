/**
 * Created by XRene on 16/5/25.
 */
    var sideModule = angular.module('sideModule', []);

    sideModule.controller('sideCtrl', ['$scope', function ($scope) {
        $scope.data = 'Hello world';

    }]);
