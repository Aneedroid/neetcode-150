class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const map = new Map();

        const dfs = (amt, i) => {
            if(i === nums.length && amt === target) {
                return 1;
            }

            if(i > nums.length) {
                return 0;
            }

            const key = JSON.stringify(`${amt},${i}`);
            if(map.has(key)) {
                return map.get(key);
            }

            const val = dfs(amt + nums[i], i + 1) + dfs(amt - nums[i], i + 1);
            map.set(key, val);

            return val;
        };

        return dfs(0, 0);
    }
}
