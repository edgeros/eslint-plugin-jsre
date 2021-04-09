/**
 * @fileoverview An ESLint plugin developed by Edgeros
 * @author @edgeros/eslint-plugin-edgeros
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


// import processors
module.exports.processors = {
    'json': require('./processors/json.js')
};

// import environments
module.exports.environments = requireIndex(__dirname + "/environments");
console.log(module.exports)


