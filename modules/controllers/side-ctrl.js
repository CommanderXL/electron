/**
 * Created by XRene on 16/5/25.
 */
    var sideModule = angular.module('sideModule', []);

    sideModule.controller('sideCtrl', ['$scope', '$_sql', function ($scope, $_sql) {
        $scope.data = 'Hello world';

        $_sql.getSqlQuery().then(function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        });
    }]);
