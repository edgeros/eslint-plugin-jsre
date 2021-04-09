/*
 * @Author: FuWenHao  
 * @Date: 2021-04-09 15:51:25 
 * @Last Modified by: FuWenHao 
 * @Last Modified time: 2021-04-09 20:33:31
 */
/**
 * edgeros 环境变量配置项
 * writable / readonly
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
        INI: "readonly",
        Buffer: "readonly",
        Timer: "readonly",
        Task: "readonly",
        module: "readonly",
        exports: "readonly",
        ARGUMENT: "readonly"
    }
}