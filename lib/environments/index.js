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
        ARGUMENT: "readonly",
        sys: "readonly",

        unbreakable: "readonly",
        synchronize: "readonly",

        INI: "readonly",
        Buffer: "readonly",
        Timer: "readonly",
        Task: "readonly",
        Shared: "readonly",
        ExtError: "readonly",

        require: "readonly",
        module: "readonly",
        exports: "readonly",

        setTimeout: "readonly",
        setInterval: "readonly",
        setImmediate: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        clearImmediate: "readonly",

        atob: "readonly",
        btoa: "readonly",

        global: "readonly",
        console: "readonly",
        process: "readonly"
    }
}