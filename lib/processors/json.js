/*
 * @Author: FuWenHao  
 * @Date: 2021-04-09 15:58:53 
 * @Last Modified by: FuWenHao 
 * @Last Modified time: 2021-04-09 16:13:26
 */
/**
 * 自定义处理器
 */
module.exports = {
    // takes text of the file and filename
    preprocess: function (text, filename) {
        // here, you can strip out any non-JS content
        // and split into multiple strings to lint

        return [string];  // return an array of strings to lint
    },

    // takes a Message[][] and filename
    postprocess: function (messages, filename) {
        // `messages` argument contains two-dimensional array of Message objects
        // where each top-level array item contains array of lint messages related
        // to the text that was returned in array from preprocess() method

        // you need to return a one-dimensional array of the messages you want to keep
        return messages[0];
    },

    supportsAutofix: true // (optional, defaults to false)
}