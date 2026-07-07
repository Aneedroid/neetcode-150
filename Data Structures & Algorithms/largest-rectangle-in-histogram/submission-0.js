class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // Obj - [val, idx]
        let max = 0;

        for(let i = 0; i < heights.length; i++) {
            let s = i;
            while(stack.length && stack[stack.length - 1][0] > heights[i]) {
                const [val, idx] = stack.pop();
                // Calculate max area;
                max = Math.max(max, (val * (i - idx)));
                // Shift the start to previous index
                s = idx;
            }
            stack.push([heights[i], s]);
        }

        console.log('stack: ', stack);
        console.log('max: ', max);
        while(stack.length) {
            const [val, idx] = stack.pop();
            max = Math.max(max, val * (heights.length - idx));
        }
        return max;
    }
}
