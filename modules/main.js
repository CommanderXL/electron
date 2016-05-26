/**
 * Created by XRene on 16/4/2.
 */

var materialSVG = require('./lib/material_svg');

module.exports = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .config(require('./router'));   //router配置


angular.bootstrap(document, ['myApp']);



