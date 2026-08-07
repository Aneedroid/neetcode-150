class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const map = new Map();

        const dfs = (i) => {
            if(map.has(i)) return map.get(i);
            if(i >= nums.length) return 0;

            const res = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
            map.set(i, res);
            return res;
        };

        return Math.max(nums[0] + dfs(2), dfs(1));
    }
}
