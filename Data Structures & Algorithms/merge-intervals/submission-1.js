class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const stack = [];
        intervals.sort((a, b) => a[0] - b[0]);

        for(let i = 0; i < intervals.length; i++) {
            let last = stack[stack.length - 1];
            if(stack.length === 0 || last[1] < intervals[i][0]) {
                stack.push(intervals[i]);
            } else {
                // overlapping
                const popped = stack.pop();
                const newInterval = [Math.min(popped[0], intervals[i][0]), Math.max(popped[1], intervals[i][1])]
                stack.push(newInterval);
            }
        }

        return stack;
    }
}
