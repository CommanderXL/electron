var electron = require('electron');
var ipc = electron.ipcMain;
var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

//窗口关闭时关闭应用
app.on('window-all-closed', function(){
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
        width: 1200,
        height: 1200,
        //resizable: false,
        frame: false,
        titleBarStyle: 'hidden'
    });
	mainWindow.loadURL('file://' + __dirname + '/index.html' );

    //打开开发者工具
    mainWindow.openDevTools();

    //窗口关闭. 可能会涉及到多个窗口应用
	mainWindow.on('closed', function() {
		mainWindow = null;
	});

});

ipc.on('message', function (event, arg) {
    console.log(arg);
    event.returnValue = 'Got it';
});


