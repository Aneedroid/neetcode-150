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
            dfs(arr, i + 1);
            const temp = [...arr]
            temp.push(nums[i]);
            dfs(temp, i + 1);
        }
        dfs([], 0);
        return [...res];
    }
}
