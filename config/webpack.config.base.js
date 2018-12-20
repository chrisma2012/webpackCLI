"use strict";

const path = require('path')
console.log('路径',path.resolve('__dirname'))

module.exports = {
  entry: 'index.js',
  devtool:'cheap-eval-source-map',
  output:{
    path:'build',
    filename:'bundle.js'
  },
  module:{
    
  },
  plugins:{

  },
  devServer:{
    
  }
}