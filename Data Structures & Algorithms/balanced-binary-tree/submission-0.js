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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;
        const dfs = (curr) => {
            if(!curr) return 0;

            const left = dfs(curr.left);
            const right = dfs(curr.right);
            if(Math.abs(left - right) > 1) {
                res = false;
                return;
            }
            return 1 + Math.max(left, right);
        }
        dfs(root);
        return res;
    }
}
