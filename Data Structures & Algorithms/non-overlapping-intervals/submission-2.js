class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let prevEnd = intervals[0][0];
        let res = 0;
        
        for(const interval of intervals) {
            const [start, end] = interval;
            if(start >= prevEnd) {
                prevEnd = end;
            } else {
                res += 1;
                prevEnd = Math.min(prevEnd, end);
            }
        }

        return res;
    }
}
