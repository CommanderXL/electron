/**
 * Created by XRene on 16/4/2.
 */
//公共库文件
//require('babel-polyfill');
/*const angular = require('angular');
const uiRouter = require('angular-ui-router');*/

import angular from 'angular';
var uiRouter = require('angular-ui-router');

module.exports = angular.module('myApp', ['ui.router'])
    .controller('demoCtrl', ['$scope', function($scope) {
        "use strict";
        $scope.data = 'Hello wolrd';
    }]);


angular.bootstrap(document, ['myApp']);



