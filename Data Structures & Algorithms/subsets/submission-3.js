class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = new Set();
        const dfs = (arr, i) => {
            if(i === nums.length) {
                res.add([...arr]);
                return;
            }

            arr.push(nums[i]);
            dfs(arr, i + 1);
            arr.pop();
            dfs(arr, i + 1);
        }
        dfs([], 0);
        return [...res];
    }
}
