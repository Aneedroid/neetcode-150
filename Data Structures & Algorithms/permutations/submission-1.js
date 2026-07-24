class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const visited = new Set();
        const dfs = (curr) => {
            if(curr.length === nums.length) {
                res.push([...curr]);
                return;
            }
            
            for(let i = 0; i < nums.length; i++) {
                if(!visited.has(nums[i])) {
                    visited.add(nums[i]);
                    curr.push(nums[i]);
                    dfs(curr);
                    curr.pop();
                    visited.delete(nums[i]);
                }
            }

        };

        dfs([], 0);
        return res;
    }
}
