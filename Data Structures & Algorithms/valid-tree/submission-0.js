class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // No cycles
        // Should be connected, no disjoint nodes
                const adj = new Map();

        for(let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for(let i = 0; i < edges.length; i++) {
            adj.get(edges[i][0]).push(edges[i][1]);
            adj.get(edges[i][1]).push(edges[i][0]);
        }

        // Now adj list should be complete

        const visited = new Set();

        const dfs = (i, prev) => {
            if(visited.has(i)) {
                // Already visited => Forms loop
                return false;
            }

            visited.add(i);
            const dependents = adj.get(i);
            for(const dep of dependents) {
                if(dep !== prev) {
                    if(!dfs(dep, i)) {
                        return false;
                    }
                }
            }

            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
