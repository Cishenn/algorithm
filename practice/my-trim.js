/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-13 14:01:11
 * @LastEditTime: 2021-04-13 21:15:35
 * @FilePath: \algorithm\practice\my-trim.js
 * @Description: 
 */
//Tue Apr 13 00:38:05 CST 2021
function _String() {}

_String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s$)/g, "");
}

_String.prototype.trimLeft = function() {
    return str.replace(/(^\s*)/g, "");
}

_String.prototype.trimRight = function() {
    return this.replace(/($\s*)/g, "");
}