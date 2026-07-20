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
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;

        const dfs = (curr) => {
            if(!curr) return 0;

            let left = Math.max(dfs(curr.left), 0);
            let right = Math.max(dfs(curr.right), 0);
            res = Math.max(res, left + right + curr.val);
            return (curr.val + Math.max(left, right));
        }

        dfs(root);
        return res;
    }
}
