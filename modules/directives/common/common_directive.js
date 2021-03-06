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
            require: '?ngModel',
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
            link: function (scope, ele, attr, ngModel) {

                if(!ngModel) return;


                scope.$watch('hh', function (val) {
                   if(typeof val === 'string') {
                       var _splitArr = val.split('\n'),
                           html = '',
                           _arr = applyGroup(_splitArr); //分组

                       for(var i = 0; i < _arr.length; i++) {
                           let _html = '';
                           //使用正则去判断
                           if(/^#[^#]/.test(_arr[i])) {
                               _html += '<h1 class="common-directive-h1">' + _arr[i].slice(1) + '</h1>';
                           } else if(/^##/.test(_arr[i])) {
                                _html += '<h2 class="common-directive-h2">' + _arr[i].slice(2) + '</h2>';
                           } else if(_arr[i][0] === '\t') {
                                _html += '<pre class="common-directive-pcode">' + _arr[i].slice(1) + '</pre>';
                           } else if(angular.isArray(_arr[i])){     //元素为数组
                               let _str = '';
                               for(let j = 0; j < _arr[i].length; j++) {
                                   _str += _arr[i][j];
                               }
                               _html += '<p class="common-directive-p">' + _str + '</p>';
                           } else if(angular.isString(_arr[i]) && _arr[i] !== '') {
                               _html += '<p class="common-directive-p">' + applyStyle(_arr[i]) + '</p>';
                           }
                           html += _html;
                       }
                       $('.public-show-box').html(html);
                    }

                    ngModel.$setViewValue(val);
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


                //段落分组
                function applyGroup(arr) {
                    arr = arr || [];
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
                    return _arr;
                }

                //段落内的样式匹配
                function applyStyle(str) {
                    str = str || '';  //(如果不做强制类型变化的话正则表达式就不会起作用)
                    let _codePattern = /(`+)(?=\S)(.+?)(?=\S)\1/g,
                        _strongPattern = /(\*\*|__)(?=\S)(.+?[*_]*)(?=\S)\1/g,  //注意这个地方的贪婪
                        _italicPattern = /(\*|_)(?=\S)(.+?)(?=\S)\1/g,
                        _result = '';


                    _result = str.replace(_strongPattern, '<strong>$2</strong>');


                    _result = _result.replace(_codePattern, '<code>$2</code>');


                    _result = _result.replace(_italicPattern, '<em>$2</em>');


                    return _result;
                }

                //获取光标位置可通过手动置一个span标签

            }
        }
    })
    .directive('topTips', ['$rootScope', '$timeout', ($rootScope, $timeout) => {
        "use strict";
        return {
            resctrict: 'EA',
            template: '<div class="public-top-tips" ng-class="{true: \'top-tips-show\'}[isShow]">'+
                '<p>{{msg}}</p>'+
            '</div>',
            scope: {},
            replace: true,
            link: function(scope, ele, attr) {
                $rootScope.$on('top-tips', (event, msg) => {
                    scope.isShow = true;
                    scope.msg = msg;
                    $timeout(() => {
                        scope.isShow = false;
                    }, 2000);
                });
            }
        }
    }])
    .directive('sideTips', ['$rootScope', '$timeout', ($rootScope, $timeout) => {
        "use strict";
        return {
            restrict: 'EA',
            template: '<div class="public-side-tips" ng-class="{true: \'side-tips-show\'}[isShow]">'+
                '<p>{{msg}}</p>'+
            '</div>',
            scope: {},
            replace: true,
            link: function (scope, ele, attr) {
                $rootScope.$on('side-tips', (event, msg) => {
                    scope.isShow = true;
                    scope.msg = msg;
                    $timeout(() => {
                        scope.isShow = false;
                    }, 2000);
                })
            }
        }
    }])
    .directive('publicDropdown', () => {
        "use strict";
        return {
            resctrict: 'EA',
            scope: {
                list: '='
            },
            template: '<div class="public-dropdown">' +
            '<p class="dropdown-title">{{selectedItem}}<i class="fa fa-sort-desc"></i>' +
            '</p>' +
                '<div class="dropdown-box">'+
            '<ul class="dropdown-list">'+
            '<li class="list-item" ng-repeat="item in list" ng-click="selectItem(item)">{{::item.name}}</li>' +
            '</ul>'+
            '</div>'+
            '</div>',
            require: '?ngModel',
            replace: true,
            link: function (scope, ele, attr, ngModel) {

                let dropdownBox = $('.dropdown-box');

                scope.$watch('list', (val) => {
                    scope.selectedItem = val[0].name;
                });

                $('.dropdown-title').on('click', (e) => {
                    e.stopPropagation();

                    if(dropdownBox.css('display') === 'block') {
                        dropdownBox.hide();
                    } else {
                        dropdownBox.show();
                    }
                });

                $(window).on('click', function (e) {
                    dropdownBox.hide();
                });


                scope.selectItem = function(item) {
                    scope.selectedItem = item.name;
                    ngModel.$setViewValue(item.val);
                }
            }
        }
    })
    .directive('loading', ['$rootScope', '$timeout', ($rootScope, $timeout) => {
        "use strict";
        return {
            resctrict: 'EA',
            scope: {
                isCompleted: '='
            },
            replace: true,
            template: '<div class="public-loading" ng-show="!isCompleted">' +
                '<div class="loading-container">'+
                '<div class="rect1"></div>'+
                '<div class="rect2"></div>'+
                '<div class="rect3"></div>'+
                '<div class="rect4"></div>'+
                '<div class="rect5"></div>'+
                '</div>'+
            '</div>',
            link: function(scope, ele, attr) {

            }
        }
    }]);
