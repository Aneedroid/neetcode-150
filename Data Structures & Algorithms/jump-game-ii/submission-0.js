class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const dp = new Array(nums.length).fill(Infinity);
        dp[nums.length - 1] = 0;
        for(let i = nums.length - 2; i >= 0; i--) {
            const end = Math.min(nums.length, i + nums[i] + 1);
            for(let j = i + 1; j < end; j++) {
                dp[i] = Math.min(dp[i], 1 + dp[j]);
            }
        }
        return dp[0];
    }
}
