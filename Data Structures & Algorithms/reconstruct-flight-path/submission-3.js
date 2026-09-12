class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        // Heirolzher
        tickets.sort();

        const adj = new Map();
        for(const [src, dst] of tickets) {
            if(adj.has(src)) {
                adj.get(src).push(dst);
            } else {
                adj.set(src, [dst]);
            }
        }

        const res = [];

        const dfs = (src) => {
            const neighbours = adj.get(src);
            while(neighbours && neighbours.length) {
                const dst = neighbours.shift();
                dfs(dst);
            }
            res.push(src);
        }

        dfs('JFK');
        return res.reverse();
    }
}
