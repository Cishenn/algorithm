/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-13 14:01:11
 * @LastEditTime: 2021-04-13 21:16:07
 * @FilePath: \algorithm\leetcode\bst-mid-traversal.js
 * @Description: 
 */
//Tue Apr 13 00:19:47 CST 2021
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let prev;
let min;

function inOrder(root) {
    if (!root)
        return;
    inOrder(root.left);

    if (prev !== -1) {
        min = Math.min(root.val - prev, min);
    }
    prev = root.val;

    inOrder(root.right);
}

var minDiffInBST = function(root) {
    // 注意 pervperv 和 minmin不能在全局变量下初始化!
    prev = -1;
    min = Infinity;

    inOrder(root);
    return min;
};