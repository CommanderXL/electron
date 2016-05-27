/**
 * Created by XRene on 16/4/2.
 */
var materialSVG = require('./lib/material_svg');
var commonDirective = require('./directives/common/common_directive');
//var CommonService = require('./services/common/common_service');


module.exports = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'commonService', 'commonDirective'])
    .config(require('./router'));   //router配置


angular.bootstrap(document, ['myApp']);



