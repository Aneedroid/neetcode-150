class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;
        // Quick Select
        const quickSelect = (l, r) => {
           let pivot = nums[r];
           let p = l;
           for(let i = l; i < r; i++) {
                // Check pivot and nums[i];
                if(nums[i] <= pivot) {
                    // Swap
                    [nums[i], nums[p]] = [nums[p], nums[i]];
                    p += 1;
                }
           }
            //    Swap p and r;
            [nums[p], nums[r]] = [nums[r], nums[p]]

            if(p < k) {
                // Go right;
                return quickSelect(p + 1, r);
            } else if (p > k) {
                return quickSelect(l, p - 1);
            } else {
                return nums[p];
            }
        }
        return quickSelect(0, nums.length - 1);
    }
}
