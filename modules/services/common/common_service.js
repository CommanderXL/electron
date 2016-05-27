/**
 * Created by XRene on 16/5/23.
 */

    //创建mysql service
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'senlinxunjian.mysql.rds.aliyuncs.com',
        user: 'dbadmin',
        password: 'ccbfu6233',
        database: 'bjlab'
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

            return {
                getSqlQuery: _getSqlQuery
            }
        }]);
