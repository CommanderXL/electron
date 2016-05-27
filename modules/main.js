/**
 * Created by XRene on 16/4/2.
 */

var materialSVG = require('./lib/material_svg');
//var CommonService = require('./services/common/common_service');

module.exports = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'commonService'])
    .config(require('./router'));   //router配置


angular.bootstrap(document, ['myApp']);



