class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = nums[0];
        let res = nums[0];
        for(let i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            res = Math.max(res, currSum);
        }
        return res;
    }
}
