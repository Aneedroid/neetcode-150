class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // First construct the adjList
        const adj = new Map();
        for(let i = 1; i <= edges.length; i++) {
            adj.set(i, []);
        }

        for(const e of edges) {
            adj.get(e[0]).push(e[1]);
            adj.get(e[1]).push(e[0]);
        }

        // Adj list is now ready
        // Idea: Do a DFS from each node, treat it as entry.
        // If cycle detected, mark as visited and add to set and return
        // At the end, iterate edges from last to first and first item
        // Present in set, return it.
        const visited = new Set();
        const cycles = new Set();

        const dfs = (i, prev) => {
            if(visited.has(i)) {
                // Cycle detected;
                if(!cycles.has(`${i},${prev}`)) {
                    cycles.add(`${i},${prev}`);
                }
                return;
            }

            visited.add(i);
            const dependents = adj.get(i);
            for(const deps of dependents) {
                if(deps !== prev) {
                    dfs(deps, i);
                }
            }

            visited.delete(i);
        }

        for(const k of adj.keys()) {
            dfs(k, 0);
        }

        // console.log('All cycles formed: ', cycles);
        for(let i = edges.length - 1; i >= 0; i--) {
            if(cycles.has(`${edges[i][0]},${edges[i][1]}`)) {
                return edges[i];
            }
        }
    }
}
