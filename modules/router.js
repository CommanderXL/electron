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
                template: require('./temp/index.html'),
                controller: require('./controllers/index-ctrl.js')
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
    });
}];

