var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')


var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'cheap-source-map',
  plugins: [
    new BrowserSyncPlugin({
        host: process.env.IP || 'localhost',
        port: process.env.PORT || 3000,
        server: {
            baseDir: ['./', './build']
        },
        notify: false,
        logLevel: 'debug'
    })
],
  module : {
    rules : [
      {
        test : /\.js?/,
        include : APP_DIR,
        use : 'babel-loader'
      }
    ]
  },
  watch: true,
  node: {
    fs: "empty"
  }
};

module.exports = config;