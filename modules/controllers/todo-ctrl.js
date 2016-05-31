/**
 * Created by XRene on 16/5/31.
 */

module.exports = ['$rootScope', '$scope', '$_sql', ($rootScope, $scope, $_sql) => {
    "use strict";
    $_sql.dailyEventsQuery().then((data) => {
        console.log(data);
    }, (data) => {
        console.log(data);
    })
}];