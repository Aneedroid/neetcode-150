class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // Logic -> Different kind of DP, Just have 2 variables at each index
        // Tracking a min and max so far;
        // We need both because the input array can have negative numbers
        let res = nums[0];
        let min = 1;
        let max = 1;
        for(const n of nums) {
            let temp = max * n;
            max = Math.max(temp, min * n, n);
            min = Math.min(temp, min * n, n);
            res = Math.max(res, max);
        }

        return res;
    }
}
