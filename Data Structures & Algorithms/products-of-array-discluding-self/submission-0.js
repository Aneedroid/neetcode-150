class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        let pre = nums[0];
        for(let i = 1; i < nums.length; i++) {
            res[i] = pre;
            pre *= nums[i];
        }
        let post = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            res[i] *= post;
            post *= nums[i];
        }
        return res;
    }
}
