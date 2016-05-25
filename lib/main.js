/**
 * Created by XRene on 16/4/2.
 */
module.exports = (function () {
    var fs = require('fs');
    var path = require('path');
    var ipc = require('ipc');
    fs.stat('./demo/music/miss.mp3', function (err, data) {
        ipc.sendSync('message', data);
    });
})();