/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let max = 0;
        let res = 0;
        const starts = intervals.sort((a, b) => a.start - b.start).map(interval => interval.start);
        const ends = intervals.sort((a, b) => a.end - b.end).map(interval => interval.end);

        let s = 0;
        let e = 0;
        while(s < starts.length && e < ends.length) {
            if(starts[s] < ends[e]) {
                res += 1;
                s += 1;
            } else {
                res -= 1;
                e += 1;
            }
            max = Math.max(max, res);
        }

        return max;
    }
}
