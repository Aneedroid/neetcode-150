class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // Gotta find the connected pieces
        // Disjoint sets
        // Init count with 0
        // We can do this by traversing from each node, mark all it's dependents as visited and inc count by 1
        // If already visited, ignore;
        // return count;
        // Do we care if it forms a cycle? => No.

        // Let's construct the adj first
        const adj = new Map();
        for(let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for(const e of edges) {
            adj.get(e[0]).push(e[1]);
            adj.get(e[1]).push(e[0]);
        }

        // Adj is now done;
        const visited = new Set();
        // Start DFS
        const dfs = (i) => {
            if(visited.has(i)) {
                return false;
            }

            visited.add(i);
            const dependents = adj.get(i);
            for(const deps of dependents) {
                dfs(deps);
            }
            return true;
        }

        let res = 0;
        for(let i = 0; i < n; i++) {
            if(dfs(i)) {
                res += 1;
            }
        }

        return res;
    }
}
