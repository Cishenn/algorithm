/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-13 14:01:11
 * @LastEditTime: 2021-04-13 21:15:55
 * @FilePath: \algorithm\leetcode\maximum.js
 * @Description: 
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const ss = [];
    for (let k in nums)
        ss[k] = '' + nums[k];
    ss.sort((a, b) => {
        return (b + a) - (a + b);
    });

    let k = 0;
    while (k < ss.length - 1 && ss[k] === '0')
        ++k;
    return ss.slice(k).join('');
};