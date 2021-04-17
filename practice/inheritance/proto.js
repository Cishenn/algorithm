/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-15 10:58:30
 * @LastEditTime: 2021-04-15 10:59:39
 * @FilePath: \algorithm\practice\inheritance\parasitic.js
 * @Description: 
 */
function createOjb(o) {
    function F() {};
    F.prototype = o;
    return new F();
}