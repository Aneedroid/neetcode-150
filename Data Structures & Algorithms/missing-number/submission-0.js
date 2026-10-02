class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let arr = Array.from({ length: nums.length + 1 }, (_, idx) => idx);
        let expected = arr.reduce((a, b) => a ^ b);
        let actual = nums.reduce((a, b) => a ^ b);
        return expected ^ actual;
    }
}
