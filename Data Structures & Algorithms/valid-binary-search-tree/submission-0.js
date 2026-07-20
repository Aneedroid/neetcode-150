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
    isValidBST(root) {
        const isValid = (curr, left, right) => {
            if(!curr) return true;

            if(!(curr.val > left && curr.val < right)) return false;
            return isValid(curr.left, left, curr.val) && isValid(curr.right, curr.val, right);
        }

        return isValid(root, -Infinity, Infinity);
    }
}
