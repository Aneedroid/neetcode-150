class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // Let's try union find
        // Every node's parent is themselves for now as they are unlinked
        const parent = Array.from({ length: edges.length + 1}, (_, i) => i);
        // union by size, so rank will be 1 for all
        const rank = new Array(edges.length + 1).fill(1);

        // This function will return parent of node
        const find = (n) => {
            if(n !== parent[n]) {
                parent[n] = find(parent[n]);
            }
            return parent[n];
        };

        const union = (n1, n2) => {
            const p1 = find(n1);
            const p2 = find(n2);

            if(p1 === p2) {
                return false;
            }

            if(rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        };

        for(const e of edges) {
            if(!union(e[0], e[1])) {
                return [e[0], e[1]];
            }
        }
    }
}
