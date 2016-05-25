/**
 * Created by XRene on 16/5/25.
 */


//必须要引入babel-polyfill文件,提供promise语法糖,主要是为了解决node0.10.28版本里面无promise语法的问题
require('babel-polyfill');
var path = require('path');

module.exports = {
    entry: './modules/entry.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    watch: true,
    resolve: {
        extensions: ['', '.js'],
        alias: {
            mainCss: __dirname + '/modules/asset/less/'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]

    },
    'dev-tool': 'source-map'
};