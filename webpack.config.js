'use strict';

const path = require('path');
const args = require('yargs').argv;

// 允许运行的环境列表
// dev 开发环境；dist 发布环境；test 测试环境
const allowedEnvs = ['dev', 'dist', 'test', 'demo']

// 根据--dev配置对应的环境变量
let env = args.env
//是否开启mock环境
process.env.MOCK = args.define ? args.define : 'dev'
/**
 * 构建webpack配置文件
 * @param  {String} wantedEnv 当前运行的环境
 * @return {Object} Webpack config 不同环境的配置
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1
  let validEnv = isValid ? wantedEnv : 'test'
  let config = require(path.join(__dirname, 'build/' + validEnv))
  return config
}

module.exports = buildConfig(env)