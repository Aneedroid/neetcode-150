class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((a, b) => a + b);
        if(totalSum % 2 !== 0) return false;

        // Even total;
        const target = totalSum / 2;

        // So the problem now becomes
        // With this array nums, Can you reach a target sum of target

        const dfs = (i, sum) => {
            if(sum === target) {
                return true;
            }

            if(i >= nums.length || sum > target) {
                return false;
            }

            return dfs(i + 1, sum + nums[i]) || dfs(i + 1, sum);
        }

        return dfs(0, 0);
    }
}
