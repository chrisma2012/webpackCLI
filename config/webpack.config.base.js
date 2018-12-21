"use strict";

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {

  },
  plugins: [
    new htmlWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    color: true, //开启consoleLog颜色
    headers: {    //
      "X-Custom-Foo": "bar"
    },
    compress: true, //开启压缩
    hot: true, //热加载
    host: "0.0.0.0", //默认是 localhost。如果你希望服务器外部可访问,则配置为0.0.0.0
    port: 9999,
    allowedHosts: [], //提供访问域名白名单
    before (app) {    // 接口请求前拦截器
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
    after (app) {   //接口请求完毕后 后续回调？

    }
  }
}