/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-15 10:51:15
 * @LastEditTime: 2021-04-15 11:17:22
 * @FilePath: \algorithm\practice\inheritance\parasitic-composite.js
 * @Description: 
 */
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    let prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}