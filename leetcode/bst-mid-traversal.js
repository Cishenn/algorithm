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
let prev=-1;
let min=Infinity;
function inOrder(root){
    if(!root)
        return;
    inOrder(root.left);

    if(prev!==-1){
        min=Math.min(root.val-prev, min);
    }
    prev=root.val;

    inOrder(root.right);
}

var minDiffInBST = function(root) {
    inOrder(root);
    return min;
};
