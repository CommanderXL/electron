/**
 * Created by XRene on 16/5/27.
 */
var $ = require('jquery');

module.exports = angular.module('commonDirective', [])
    .directive('markDown', () => {
        "use strict";
        return {
            restrict: 'EA',
            scope: {

            },
            //require: '?ngModel',
            replace: true,
            template: '<div class="public-mark-down clearfix">'+
            '<textarea class="public-contenteditable-write" contenteditable ng-model="hh">'+
                '</textarea>'+
            '<div class="public-contenteditable-show">'+
            '</div>'+
            '</div>',
            link: function (scope, ele, attr) {
                scope.$watch('hh', function (val) {
                   if(typeof val === 'string') {
                       var _arr = val.split('\n'),
                           html = '';
                       for(var i = 0; i < _arr.length; i++) {
                           let _html = '';
                           //使用正则去判断
                           // # / ##
                           if(_arr[i][0] === '#' && _arr[i].length >= 2) {
                               _html += '<h1 class="common-directive-h1">' + _arr[i].slice(1) + '</h1>';
                           } else {
                               _html += '<p class="common-directive-p">' + _arr[i] + '</p>';
                           }
                           html += _html;
                       }
                       $('.public-contenteditable-show').html(html);
                    }
                });

                $('.public-contenteditable-write').keydown(function (e) {
                    if(e.keyCode === 9) {
                        return false;
                    }
                });
            }
        }
    });
