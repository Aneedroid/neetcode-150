class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // 2 DP approach
        // nums.length + 1
        nums.push(0);
        // dp[nums.length - 3] = Math.max(dp[nums.length - 3], dp[nums.length - 2]);
        for(let i = nums.length - 3; i >= 0; i--) {
            nums[i] = Math.max(nums[i] + nums[i + 2], nums[i + 1]);
        }

        return nums[0];
    }
}
