'use strict'
const path = require('path')
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: './demo/main.js',
    // 'webpack-dev-server': [
    //   'webpack-dev-server/client?http://127.0.0.1:' + 8080,
    //   'webpack/hot/dev-server',
    // ]
  },
  devServer: {
    compress: true,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 8080,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    proxy: {},
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false,
    }
  },
  output: {
    path: path.resolve(__dirname, '../demoDist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: false, usePostCSS: false })
  },
  plugins: [
    new CleanWebpackPlugin(['demoDist'], { root: path.resolve(__dirname, '../') }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'demo/index.html',
      inject: true,
      // favicon: utils.resolve('favicon.ico'),
    })
  ]
})