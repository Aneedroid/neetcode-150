class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        // Greedy
        let l = 0;
        let r = 0;
        let res = 0;
        
        while(r < nums.length - 1) {
            let farthest = 0;
            for(let i = l; i < r + 1; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }
            // farthest stretch is calculated from here
            // This works because, it is given in the question that we always will have an answer.. So we can assume the farthest stretch is the most optimal and minimum jump needed
            l = r + 1;
            r = farthest;      
            res += 1;
        }

        return res;
    }
}
