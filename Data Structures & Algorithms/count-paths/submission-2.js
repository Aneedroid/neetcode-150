class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m + 1 }, (_) => new Array(n + 1).fill(0));
        dp[m - 1][n - 1] = 1;

        for(let i = m - 1; i >= 0; i--) {
            for(let j = n - 1; j >= 0; j--) {
                if(i === m - 1 && j === n - 1) {
                    continue;
                }
                dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
            }
        }

        return dp[0][0];
    }
}
