/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // Map of what's already available and it's neighbours
        const map = new Map();
        // Make a copy of this graph starting with node;
        const dfs = (curr) => {
            if(!curr) return null;
            if(map.has(curr)) return map.get(curr);

            // Node not found
            const copy = new Node(curr.val);
            map.set(curr, copy);
            // Now to set neighbours
            for(const nei of curr.neighbors) {
                copy.neighbors.push(dfs(nei));
            }
            return copy;
        };

        return dfs(node);
    }
}
