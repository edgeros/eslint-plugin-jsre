/*
 * @Author: FuWenHao  
 * @Date: 2021-04-09 20:29:08 
 * @Last Modified by: FuWenHao 
 * @Last Modified time: 2021-06-02 14:13:32
 */

"use strict";
const env = require(__dirname + "/environments")

module.exports.rules = {
};
// import processors
module.exports.processors = {
};
// import environments
module.exports.environments = {
  jsre: env, // deprecating this confusing name, just for backwards compatibility
  env: env
};
