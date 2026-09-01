class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dp = new Array(nums.length).fill(false);
        dp[nums.length - 1] = true;
        for(let i = dp.length - 2; i >= 0; i--) {
            let end = Math.min(nums.length, i + nums[i] + 1);
            for(let j = i + 1; j < end; j++) {
                if(dp[j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[0];
    }
}
