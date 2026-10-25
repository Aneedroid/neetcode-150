class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const map = new Map();

        const dfs = (i, prev) => {
            const key = `${i},${prev}`;

            if(map.has(key)) {
                return map.get(key);
            }
            if(i >= nums.length) {
                return 0;
            }

            let lis;
            if(nums[i] > prev) {
                lis = Math.max(1 + dfs(i + 1, nums[i]), dfs(i + 1, prev));
            } else {
                lis = dfs(i + 1, prev);
            }
            map.set(key, lis);
            return map.get(key);
        }

        return dfs(0, -Infinity);
    }
}
