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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length === 0) return true;
        // Sort first, intervals can be in any order
        intervals.sort((intervalA, intervalB) => intervalA.start - intervalB.start);

        // Determing if person can attend all meeting
        // Check if none of the intervals are overlapping
        // If overlapping, return false;

        // Slighta odd but first condition will handle this case and just for first elem
        let prevEnd = intervals[0].start;
        for(const interval of intervals) {
            const {start, end} = interval;
            if(start >= prevEnd) {
                prevEnd = end;
            } else {
                // Overlapping
                return false;
            }
        }

        return true;
    }
}
