/*
 * @Author: FuWenHao  
 * @Date: 2021-04-09 20:29:08 
 * @Last Modified by: FuWenHao 
 * @Last Modified time: 2021-04-09 20:29:52
 */

"use strict";

var requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
// import processors
module.exports.processors = {
};
// import environments
module.exports.environments = requireIndex(__dirname + "/environments");


