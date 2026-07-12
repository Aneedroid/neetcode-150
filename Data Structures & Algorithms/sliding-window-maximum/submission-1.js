class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // Queue will just have indices, not number for ease of code
        const q = [];
        let l = 0;
        let r = 0;
        const output = [];
        while(r < nums.length) {
            while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }
            q.push(r);

            // Check window and pop l from left
            if(q[0] < l) {
                q.shift();
            }

            if(r - l + 1 === k) {
                // Window size reached, push and increase l
                output.push(nums[q[0]]);
                l++;
            }

            r++;
        }
        return output;
    }
}
