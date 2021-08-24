/**
 * Copyright (c) 2021 EdgerOS Team.
 * All rights reserved.
 *
 * Detailed license information can be found in the LICENSE file.
 *
 * Author : Fu Wenhao <fuwenhao@acoinfo.com>
 * File   : index.js
 * Desc   : EdgerOS JSRE environment definition.
 */
module.exports = {
    globals: {
        require: "readonly",
        unbreakable: "readonly",
        synchronize: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        setImmediate: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        clearImmediate: "readonly",
        console: "readonly",
        process: "readonly",
        sys: "readonly",
        INI: "readonly",
        Buffer: "readonly",
        Timer: "readonly",
        Task: "readonly",
        module: "readonly",
        exports: "readonly",
        ARGUMENT: "readonly"
    }
}