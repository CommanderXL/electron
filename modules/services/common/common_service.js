/**
 * Created by XRene on 16/5/23.
 */

    //创建mysql service
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'senlinxunjian.mysql.rds.aliyuncs.com',
        user: 'dbadmin',
        password: 'ccbfu6233',
        database: 'experiments'
    });

    connection.connect(function (err) {
        if(err){
            console.error('error connecting ' + err.stack);
            return ;
        }
        console.log('connected as id ' + connection.threadId);
    });

    angular.module('commonService', [])
        .factory('$_http', ['$http', '$q', function ($http, $q) {
                "use strict";
                var deferred = $q.defer();

                var _reqGetFn = function (url) {
                    url = url || '';
                    $http({
                        method: 'get',
                        url: url,
                        dataType: 'json'
                    }).success( (data) => {
                        if(data.errno === 0) {
                            deferred.resolve(data.data);
                        } else {
                            deferred.resolve(data.data);
                        }
                    }).error(function (data) {
                        deferred.resolve(data);
                    });
                    return deferred.promise;
                };

                var _reqPostFn = function (url, param) {
                    url = url || '';
                    param = param || {};
                    $http({
                        method:'POST',
                        url: url,
                        param: param,
                        headers: {
                            'X-Ruquestes-With': 'XMLHttpRequest'
                        }
                    }).success((data) => {
                        if(data.errno === 0) {
                            deferred.resolve(data.data);
                        } else {
                            deferred.reject(data.data);
                        }
                    });
                    return deferred.promise;
                };

                return {
                    reqGetFn: _reqGetFn,
                    reqPostFn: _reqPostFn
                };
            }])
        .factory('$_util', ['$filter', function ($filter) {
            //转化为毫秒数
            var _initToTime = function (time) {
                return new Date(time).valueOf();
            };

            var _timeToInit = function (time) {
                return $filter('date')(time, 'yyyy-MM-dd hh:mm:ss');
            };

            var _getYearAndMonth = function (time) {
                let _month = new Date(time).getMonth() + 1;
                return new Date(time).getFullYear() + '-' + (_month < 10 ? ('0' + _month) : _month);
            };


            return {
                initToTime: _initToTime,
                timeToInit: _timeToInit,
                getYearAndMonth: _getYearAndMonth
            }
        }])
        .factory('$_sql', ['$q', function ($q) {
            var deferred = $q.defer();

            function _getSqlQuery() {
                "use strict";
                connection.query('select * from moistureinfo', function (err, data) {
                    if(err) console.log(err);
                    deferred.resolve(data);
                });

                return deferred.promise;
            }

            //日记存入
            var _dailyEventsWriteIn = function (params) {
                connection.query('insert into dailyEvents set ?', params, (err, result) => {
                    "use strict";
                    if(err) deferred.reject(err);
                    deferred.resolve(result);
                });
                return deferred.promise;
            };

            //日记取出
            var _dailyEventsQuery = function () {
                connection.query('select * from dailyEvents order by time desc', (err, result) => {
                    "use strict";
                    if(err) deferred.reject(err);
                    deferred.resolve(result);
                });
                return deferred.promise;
            };

            return {
                getSqlQuery: _getSqlQuery,
                dailyEventsWriteIn: _dailyEventsWriteIn,
                dailyEventsQuery: _dailyEventsQuery
            }
        }]);
