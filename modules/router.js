/**
 * Created by XRene on 16/5/26.
 */


module.exports = ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    "use strict";
    $urlRouterProvider.otherwise('/index');


    $stateProvider.state('index', {
        url: '/index',
        views: {
            main: {
                template: require('./temp/todo.html'),
                controller: require('./controllers/todo-ctrl.js')
            }
        }
    }).state('test', {
        url: '/test',
        views: {
            main: {
                template: require('./temp/test.html'),
                controller: function ($scope) {
                    $scope.data = 'Hello test Page';
                }
            }
        }
    }).state('record', {
        url: '/record',
        views: {
            mainrecord: {
                template: require('./temp/record.html'),
                controller: require('./controllers/record-ctrl.js')
            }
        }
    }).state('todo', {
        url: '/todo',
        views: {
            main: {
                template: require('./temp/record.html'),
                controller: require('./controllers/record-ctrl.js')
            }
        }
    })
}];

