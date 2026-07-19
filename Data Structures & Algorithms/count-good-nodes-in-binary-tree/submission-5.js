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
    goodNodes(root) {
        const dfs = (curr, maxVal) => {
            if(!curr) return 0;
            maxVal = Math.max(maxVal, curr.val);
            return (curr.val >= maxVal ? 1 : 0) + dfs(curr.left, maxVal) + dfs(curr.right, maxVal);
        }
        return dfs(root, root.val);
    }
}
