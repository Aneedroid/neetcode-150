/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // Inorder
        const res = [];
        const dfs = (curr) => {
            if(!curr) return;
            if(curr.left) dfs(curr.left);
            res.push(curr.val);
            if(curr.right) dfs(curr.right);
        }
        dfs(root);
        return res[k-1];
    }
}
