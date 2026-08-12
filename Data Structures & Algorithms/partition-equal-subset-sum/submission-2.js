class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((a, b) => a + b);
        if(totalSum % 2 !== 0) return false;

        // Even total;
        const target = totalSum / 2;

        // So the problem now becomes
        // With this array nums, Can you reach a target sum of target
        const map = new Map();

        const dfs = (i, tgt) => {
            if(tgt === 0) {
                return true;
            }

            if(i >= nums.length || tgt < 0) {
                return false;
            }

            const key = `${i},${tgt}`;
            if(map.has(key)) {
                return map.get(key);
            }

            const res = dfs(i + 1, tgt - nums[i]) || dfs(i + 1, tgt);
            map.set(key, res);
            return res;
        }

        return dfs(0, target);
    }
}
