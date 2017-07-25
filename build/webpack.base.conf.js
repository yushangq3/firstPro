var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)// 拼接我们的工作区路径为一个绝对路径
}

module.exports = {
  entry: {
    app: './src/main.js'// 编译文件入口
  },
  output: {
    path: config.build.assetsRoot,// 编译输出的静态资源根路径
    filename: '[name].js',// 编译输出的文件名
     chunkFilename: 'chunk[id].js?[chunkhash]',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath// 正式发布环境下编译输出的上线路径的根路径
  },
  resolve: {// 自动补全的扩展名
    extensions: ['.js', '.vue', '.json' ,'.less', '.css',],
    // 不进行自动补全或处理的文件或者文件夹
		//  fallback: [path.join(__dirname, '../node_modules')],
    alias: {// 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue$': 'vue/dist/vue.esm.js',
     
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
