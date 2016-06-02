/**
 * Created by XRene on 16/5/27.
 */

module.exports = ['$scope', '$_sql', function ($scope, $_sql) {
    $scope.data = '记录一下今天的心情吧~';

    $scope.params = {
        id: 1,
        content: '',
        feeling: 1
    };


    $scope.dataList = [
        {
            name: '小太阳',
            val: 1
        },
        {
            name: '乌云',
            val: 2
        }
    ];

    $scope.confirm = function () {
        $scope.params.time = new Date();
        $_sql.dailyEventsWriteIn($scope.params, (data) => {
            "use strict";
            return;
        }, (data) => {
            "use strict";
            //$scope.$emit('top-tips', data);
        })
    };

    $scope.test = function () {
        $scope.$emit('top-tips', 'good jobs');
    }
}];