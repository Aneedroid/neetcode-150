class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        const res = [];

        const dfs = (curr, i, total) => {
            if(total === target) {
                res.push([...curr]);
                return;
            }

            if(i >= candidates.length || total > target) {
                return;
            }


            curr.push(candidates[i]);
            dfs(curr, i + 1, total + candidates[i]);

            curr.pop();

            while(i + 1 < candidates.length && candidates[i] === candidates[i+1]) {
                i += 1;
            }
            dfs(curr, i + 1, total);
        }

        dfs([], 0, 0);

        return res;
    }
}
