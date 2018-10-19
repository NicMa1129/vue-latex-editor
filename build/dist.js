'use strict'
const path = require('path')
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./base')
const vueLoaderConfig = require('./vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  entry: {
    latexEditor: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '../') }),
    new uglifyjsWebpackPlugin(),
    new ExtractTextPlugin("latexEditor.css"),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true }
    })
  ]
})