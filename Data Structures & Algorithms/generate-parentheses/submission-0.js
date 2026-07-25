class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const dfs = (str, open, closed) => {
            if(
                open > n ||
                open < closed
            ) {
                // Constraint not met, return;
                return;
            }
            if((str.length === 2 * n) && open === closed) {
                res.push(str);
                return;
            }

            // Recursively call for open
            dfs(str + '(', open + 1, closed);
            // Recursively call for closed
            dfs(str + ')', open, closed + 1);
        };
        
        dfs('', 0, 0);

        return res;
    }
}
