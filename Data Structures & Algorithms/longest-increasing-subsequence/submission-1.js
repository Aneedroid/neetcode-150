class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let max = 1;
        const map = new Map();

        const dfs = (i) => {
            if(map.has(i)) {
                return map.get(i);
            }

            if(i >= nums.length) {
                return 0;
            }

            let res = 1;
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[j] > nums[i]) {
                    res = Math.max(res, 1 + dfs(j));
                }
            }
            map.set(i, res);
            max = Math.max(max, res);
            return res;
        }

        for(let i = 0; i < nums.length; i++) {
            dfs(i);
        }

        return max;
    }
}
