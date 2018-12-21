"use strict";

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: '/build',
    filename: 'bundle.js'
  },
  module: {
    // exprContextCritical: false,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: '首页',
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'), 
      inject: 'head',
      // favicon: path.resolve(__dirname, 'favicon.icon'),
      minify: true,
      cache: true,
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // historyApiFallback:true,
    // inline:true,
    // color: true, //开启consoleLog颜色
    // progress: true, //运行进度条输出
    // headers: {    //给所有响应添加自定义头部字段
    //  // "X-Custom-Foo": "bar"
    // },
    // compress: true, //开启压缩
    // hot: true, //热加载
    // host: "0.0.0.0", //默认是 localhost。如果你希望服务器外部可访问,则配置为0.0.0.0
    port: 9999,
    // allowedHosts: [], //提供访问域名白名单
    proxy: {
      context: ['/auth', '/api'],
      target: "http://localhost:3000",
      pathRewrite: { "^api": "" },
      bypass: function (req, res, proxyOptions) {  //根据不同请求判定返回html文件还是api接口
        if (req.headers.accept.indexOf("html") !== -1) {
          console.log("Skipping proxy for browser request.");
          return "/index.html";
        }
      }
    },

    before (app) {    // 接口请求前拦截器
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
    after (app) {   //接口请求完毕后 后续回调？

    }
  }
}