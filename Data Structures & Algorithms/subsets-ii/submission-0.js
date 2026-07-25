class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        const dfs = (curr, i) => {
            if(i > nums.length) {
                return;
            }
            if(i === nums.length) {
                res.push([...curr]);
                return;
            }

            curr.push(nums[i]);
            dfs(curr, i + 1);
            curr.pop();

            while(i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
            dfs(curr, i + 1);
        };

        dfs([], 0);

        return res;
    }
}
