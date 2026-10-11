class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const map = new Map();

        const dfs = (i, amount) => {
            const key = `${i},${amount}`;
            if(map.has(key)) {
                return map.get(key);
            }

            if(i >= nums.length) {
                if(amount === target) {
                    return 1;
                }
                return 0;
            }

            map.set(key, dfs(i + 1, amount - nums[i]) + dfs(i + 1, amount + nums[i]));

            return map.get(key);
        }

        return dfs(0, 0);
    }
}
