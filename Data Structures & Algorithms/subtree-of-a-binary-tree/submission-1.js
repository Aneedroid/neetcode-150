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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // Intuition: Treat each node as root and compare with subRoot
        // If same somewhere, break it and return true;
        // If not, return false and continue;
        const dfs = (curr) => {
            if(!curr) return null;
            const isSame = this.isSameTree(curr, subRoot);
            if(isSame) {
                return true;
            }
            
            return dfs(curr.left) || dfs(curr.right);
        }
        const res = dfs(root);
        return res ? res : false;

    }

    isSameTree(p, q) {
        if(!p && !q) return true;
        if(p && q) {
            return p.val === q.val &&
            this.isSameTree(p.left, q.left) &&
            this.isSameTree(p.right, q.right);
        }
        return false;
    }
}
