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