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
                '<div class="public-contenteditable-write">'+
            '<textarea class="public-write-box" contenteditable ng-model="hh">'+
            '</textarea>'+
            '</div>'+
            '<div class="public-contenteditable-show">'+
            '<div class="public-show-box">'+
            '</div>'+
            '</div>'+
            '</div>',
            link: function (scope, ele, attr) {
                scope.$watch('hh', function (val) {
                   if(typeof val === 'string') {
                       var _arr = val.split('\n'),
                           html = '';

                       applyGroup(_arr);
                       for(var i = 0; i < _arr.length; i++) {
                           let _html = '';
                           //使用正则去判断
                           if(/^#[^#]/.test(_arr[i])) {
                               _html += '<h1 class="common-directive-h1">' + _arr[i].slice(1) + '</h1>';
                           } else if(/^##/.test(_arr[i])) {
                                _html += '<h2 class="common-directive-h2">' + _arr[i].slice(2) + '</h2>';
                           } else if(_arr[i][0] === '\t') {
                                _html += '<pre class="common-directive-pcode">' + _arr[i].slice(1) + '</pre>';
                           } else {
                               _html += '<p class="common-directive-p">' + _arr[i].replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;') + '</p>';
                           }
                           html += _html;
                       }
                       $('.public-show-box').html(html);
                    }
                });

                $('.public-write-box').keydown(function (e) {
                    //var _textRange = this.createTextRange(); 获取光标位置
                    if(e.keyCode === 9) {
                        $(this).val($(this).val() + '\t');
                        return false;
                    }
                    if(e.keyCode === 13) {
                        //$(this).val($(this).val() + '\t');
                    }
                });


                function applyGroup(arr) {
                    arr = arr || []
                    var _pattern = /\t|#{1,2}/,
                        _flag = false,
                        _arr = [];
                    for(let i = 0; i < arr.length; i++) {
                        //非制表符和#开头
                        if(!_pattern.test(arr[i]) && arr[i] !== '') {
                            if(!_flag) {
                                _arr.push(arr[i]);
                                _flag = true;
                            } else {
                                //段落的合并(数组最后一个元素是字符还是数组做出判断)
                                if(typeof _arr[_arr.length - 1] === 'string') {
                                    let _str = _arr[_arr.length - 1];
                                    _arr[_arr.length - 1] = [];
                                    _arr[_arr.length - 1].push(_str);
                                    _arr[_arr.length - 1].push('<br>' + arr[i]);
                                } else {
                                    _arr[_arr.length - 1].push('<br>' + arr[i]);
                                }
                            }
                        } else {
                            //排除空字符
                            if(_arr[i] !== '') {
                                _arr.push(arr[i]);
                            }
                            _flag = false;
                        }
                    }
                }

                //获取光标位置可通过手动置一个span标签

            }
        }
    });
