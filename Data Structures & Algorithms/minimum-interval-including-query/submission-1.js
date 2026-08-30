class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        const sortedQ = queries.toSorted((a, b) => a - b);
        let res = {};
        let i = 0;
        let minHeap = new MinPriorityQueue(e => e[0]);

        for(const q of sortedQ) {
            while(i < intervals.length && intervals[i][0] <= q) {
                // Push to minQueue;
                minHeap.push([intervals[i][1] - intervals[i][0] + 1, intervals[i][1]]);
                i += 1;
            }

            // Once pushed to Queu; to find min, you need to pop invalid
            while(!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.pop();
            }

            // Now min should be the min
            if(!minHeap.isEmpty()) {
                res[q] = minHeap.front()[0];
            } else {
                res[q] = -1;
            }
        }

        // Towards the end, we need to remap Q values..
        let finalRes = [];
        for(const q of queries) {
            finalRes.push(res[q]);
        }

        return finalRes;
    }
}
