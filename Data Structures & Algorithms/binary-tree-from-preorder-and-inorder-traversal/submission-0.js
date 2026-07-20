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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!(preorder.length > 0) || !(inorder.length > 0)) return null;

        const root = new TreeNode(preorder[0]);
        const m = inorder.findIndex(n => n === preorder[0]);

        root.left = this.buildTree(preorder.slice(1, m + 1), inorder.slice(0, m));
        root.right = this.buildTree(preorder.slice(m + 1), inorder.slice(m + 1));

        return root;
    }
}
