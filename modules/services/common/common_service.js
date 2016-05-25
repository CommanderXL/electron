/**
 * Created by XRene on 16/5/23.
 */

    const commonService = angular.module('commonService', []);

    commonService.factory('$_http', ['$http', '$q', function ($http, $q) {
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
    }]);
