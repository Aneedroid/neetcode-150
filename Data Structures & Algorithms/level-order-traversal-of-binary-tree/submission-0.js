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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const queue = [root];
        const res = [];
        while(queue.length) {
            const len = queue.length;
            let local = [];
            console.log('queue: ', queue);
            for(let i = 0; i < len; i++) {
                const curr = queue.shift();
                if(curr) {
                    if(curr.left) queue.push(curr.left);
                    if(curr.right) queue.push(curr.right);
                    local.push(curr.val);
                }
            }
            res.push(local);
        }
        return res;
    }
}
