'use strict'
const utils = require('./utils')
// const defaultSettings = require('./defaults');
// const isProduction = process.env.NODE_ENV === 'production'
// const sourceMapEnabled = isProduction
//   ? defaultSettings.build.productionSourceMap
//   : defaultSettings.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: true
  }),
  cssSourceMap: false,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
