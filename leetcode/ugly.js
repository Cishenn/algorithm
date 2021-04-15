/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-10 18:37:13
 * @LastEditTime: 2021-04-14 18:05:26
 * @FilePath: \algorithm\leetcode\ugly.js
 * @Description: 
 */
function isUgly(n) {
    if (n <= 0)
        return true;
    const factors = [2, 3, 5];

    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n === 1;
}