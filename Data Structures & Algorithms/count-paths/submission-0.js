class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, (_, index) => new Array(n).fill(0));
        // Setting last row as 1
        for(let j = 0; j < n; j++) {
            dp[m-1][j] = 1;
        }
        // Set last col as 1
        for(let i = 0; i < m; i++) {
            dp[i][n - 1] = 1;
        }

        for(let i = m - 2; i >= 0; i--) {
            for(let j = n - 2; j >= 0; j--) {
                dp[i][j] = dp[i][j+1] + dp[i+1][j];
            }
        }

        return dp[0][0];
    }
}
