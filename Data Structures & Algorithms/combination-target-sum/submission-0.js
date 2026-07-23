class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const dfs = (curr, i, total) => {
            if(
                i >= nums.length ||
                total > target
            ) {
                return;
            }
            if(total === target) {
                res.push([...curr]);
                return;
            }
            curr.push(nums[i]);
            dfs(curr, i, total + nums[i]);
            curr.pop();
            dfs(curr, i + 1, total);
        };
        dfs([], 0, 0);
        return res;
    }
}
