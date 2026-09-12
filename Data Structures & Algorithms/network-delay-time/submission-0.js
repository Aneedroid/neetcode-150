class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const edges = new Map();
        for(let i = 1; i <= n; i++) {
            edges.set(i, []);
        }

        for(let i = 0; i < times.length; i++) {
            edges.get(times[i][0]).push([times[i][1], times[i][2]]);
        }

        const minHeap = new MinPriorityQueue(e => e[0]);
        
        minHeap.push([0, k]);
        const visited = new Set();
        let time = 0;

        while(!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.pop();
            if(visited.has(n1)) {
                continue;
            }
            visited.add(n1);
            time = w1;

            for(const [n2, w2] of edges.get(n1)) {
                if(!visited.has(n2)) {
                    minHeap.push([w1 + w2, n2]);
                }
            }
        }

        return visited.size === n ? time : -1;
    }
}
