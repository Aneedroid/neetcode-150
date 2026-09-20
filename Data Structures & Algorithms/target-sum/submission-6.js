class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = Array.from({length: nums.length + 1}, () => ({}));
        dp[0][0] = 1;

        for(let i = 0; i < nums.length; i++) {
            for(let total in dp[i]) {
                total = Number(total);
                let count = dp[i][total]; // Will be 1 for first i;
                dp[i + 1][total - nums[i]] = (dp[i + 1][total - nums[i]] || 0) + count;
                dp[i + 1][total + nums[i]] = (dp[i + 1][total + nums[i]] || 0) + count;
            }
        }
        return dp[nums.length][target] || 0;
    }
}
