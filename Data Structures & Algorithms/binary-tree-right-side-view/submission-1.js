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
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = [root];
        const res = [];

        while(queue.length > 0) {
            const len = queue.length;
            for(let i = 0; i < len; i++) {
                const curr = queue.shift();
                if(i === len - 1 && curr) {
                    res.push(curr.val);
                }
                if(curr && curr.left) queue.push(curr.left);
                if(curr && curr.right) queue.push(curr.right);
            }
        }
        return res;
    }
}
