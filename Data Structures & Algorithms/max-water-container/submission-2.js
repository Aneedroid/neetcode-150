class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;
        while(l < r) {
            max = Math.max((r - l) * Math.min(heights[r], heights[l]), max);
            if(heights[l] <= heights[r]) {
                l++;
            } else if(heights[l] > heights[r]) {
                r--;
            }
        }
        return max;
    }
}
