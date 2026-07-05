class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;
        for(const n of nums) {
            let len = 0;
            if(!set.has(n - 1)) {
                while(set.has(n + len)) {
                    len++;
                    res = Math.max(len, res);
                }
            }
        }
        return res;
    }
}
