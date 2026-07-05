class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        // Sort
        nums.sort((a, b) => a - b);
        let i = 0;
        while(i < nums.length - 2) {
            let j = i + 1;
            let k = nums.length - 1;
            // Now 2 pointer
            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    while(nums[j] === nums[j+1]) j++;
                    j++;
                    while(nums[k] === nums[k-1]) k--;
                    k--;
                }
                if(sum < 0) {
                    while(nums[j] === nums[j+1]) j++;
                    j++;
                }
                if(sum > 0) {
                    while(nums[k] === nums[k-1]) k--;
                    k--;
                }
            }
            while(nums[i] === nums[i+1]) i++;
            i++;
        }
        return res;
    }
}
