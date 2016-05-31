/**
 * Created by XRene on 16/5/27.
 */

module.exports = ['$scope', '$_sql', function ($scope, $_sql) {
    $scope.data = '记录一下今天的心情吧~';

    $scope.params = {
        id: 2,
        content: '',
        feeling: 0
    };


    $scope.confirm = function () {
        $scope.params.time = new Date();
        console.log($scope.params);
        $_sql.dailyEventsWriteIn($scope.params, (data) => {
            "use strict";
            return;
        }, (data) => {
            "use strict";
            console.log(data);
        })
    }
}];