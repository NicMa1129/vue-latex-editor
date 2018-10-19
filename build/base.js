'use strict'
const path = require('path')
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
      'build': utils.resolve('build')
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
        loader: 'babel-loader?cacheDirectory',
        include: [utils.resolve('src'), utils.resolve('test'), utils.resolve('node_modules/webpack-dev-server/client'), utils.resolve('demo')]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}