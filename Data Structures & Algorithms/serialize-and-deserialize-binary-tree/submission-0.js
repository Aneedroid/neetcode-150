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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        const dfs = (curr) => {
            if(!curr) {
                res.push("N");
                return;
            }
            res.push(curr.val);
            dfs(curr.left);
            dfs(curr.right);
        }
        dfs(root);
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const input = data.split(',');
        let i = 0;
        const dfs = () => {
            if(input[i] === 'N') {
                i++;
                return null;
            }
            const node = new TreeNode(Number(input[i]));
            i++;
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}
