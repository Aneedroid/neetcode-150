class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0;
        let r = heights.length - 1;

        // If both are equal, area is 0
        while(l < r) {
            // Calc area here;
            max = Math.max(max, (Math.min(heights[l], heights[r]) * (r - l)));
            if(heights[l] <= heights[r]) {
                l += 1;
            } else {
                r -= 1;
            }
        }

        return max;
    }
}
