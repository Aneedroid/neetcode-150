class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0;
        // Check if newInterval is after the intervals;
        while(i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        // Now i might overlap with newInterval;
        while(
            i < intervals.length &&
            intervals[i][0] <= newInterval[1]
        ) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            i++;
        }
        res.push([...newInterval]);

        // i is after merged..
        while(i < intervals.length) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
