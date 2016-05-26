/**
 * Created by XRene on 16/4/2.
 */
//公共库文件
//require('babel-polyfill');
/*const angular = require('angular');
const uiRouter = require('angular-ui-router');*/

import angular from 'angular';
import ngMessages from 'angular-messages';
import ngAria from 'angular-animate';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
var materialSVG = require('./lib/material_svg');
var uiRouter = require('angular-ui-router');

module.exports = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;

        $scope.googleUrl = 'http://google.com';

    });


angular.bootstrap(document, ['myApp']);



