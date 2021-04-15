/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-15 11:03:45
 * @LastEditTime: 2021-04-15 11:18:08
 * @FilePath: \algorithm\practice\inheritance\parasitic.js
 * @Description: 创建一个函数来封装继承的过程, 就是原型式继承被封装个函数
 */
function parasitic(o) {
    let clone = Object.create(o);
    clone.hello = function() {
        console.log('hello');
    }
    return clone;
}