/**
 * Created by XRene on 16/5/31.
 */

module.exports = ['$rootScope', '$scope', '$_sql', '$_util', ($rootScope, $scope, $_sql, $_util) => {
    "use strict";
    $_sql.dailyEventsQuery().then((data) => {
        $scope.list = getMonthsData(data);
    }, (data) => {
        console.log(data);
    });


    $scope.showBox = function (item) {
        item.isActive = !item.isActive;
    };

    function getMonthsData(data) {
        //按月分组
        let _monthArr = [],
            _result = [];
        for(let key of data) {
            let _time = $_util.getYearAndMonth(key.time);
            if(!_monthArr.includes(_time)) {
                _monthArr.push(_time);
            }
        }
        for(let i = 0; i < _monthArr.length; i++) {
            _result[i] = {
                time: _monthArr[i],
                dataList: []
            };
            for(let key of data) {
                let _time = $_util.getYearAndMonth(key.time);
                if(_monthArr[i] === _time) {
                    _result[i].dataList.push(key);
                }
            }
        }
        return _result;
    }
}];