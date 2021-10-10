/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    if (!root) return 0;
    let res;
    dfs(root);
    return res;

    function dfs(root) {
        if (!root || k === 0) return;
        dfs(root.right);
        k--;
        if (k === 0) res = root.val;
        dfs(root.left);
    }
};