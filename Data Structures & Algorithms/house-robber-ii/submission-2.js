class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 1) return nums[0];
        // 2 DP approach
        const findMax = (arr) => {
            arr.push(0);
            // dp[nums.length - 3] = Math.max(dp[nums.length - 3], dp[nums.length - 2]);
            for (let i = arr.length - 3; i >= 0; i--) {
                arr[i] = Math.max(arr[i] + arr[i + 2], arr[i + 1]);
            }

            return arr[0];
        };

        return Math.max(findMax(nums.slice(0, nums.length - 1)), findMax(nums.slice(1, nums.length)));
    }
}
