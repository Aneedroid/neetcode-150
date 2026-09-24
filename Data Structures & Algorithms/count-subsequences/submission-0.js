class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = Array.from({ length: t.length + 1 }, () => new Array(s.length + 1).fill(0));

        for(let i = 0; i <= s.length; i++) {
            dp[t.length][i] = 1;
        }

        for(let i = t.length - 1; i >= 0; i--) {
            for(let j = s.length - 1; j >= 0; j--) {
                dp[i][j] = dp[i][j + 1];
                if(t[i] === s[j]) {
                    dp[i][j] += dp[i + 1][j + 1];
                }
            }
        }

        return dp[0][0];
    }
}
