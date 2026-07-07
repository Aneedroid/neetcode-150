class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        console.log('??')
        let l = 0;
        let r = nums.length - 1;
        console.log('l,r: ', l, r);
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);
            console.log('m, nums[m]: ', m, nums[m]);
            if(nums[m] === target) {
                return m;
            }
            if(nums[m] < target) {
                l = m + 1;
            } else if(nums[m] > target) {
                r = m - 1;
            }
        }
        return -1;
    }
}
