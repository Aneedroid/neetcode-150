class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        // 2DP solution
        const dp = Array.from({ length: coins.length + 1}, (_) => new Array(amount + 1).fill(0));

        for(let i = 0; i <= coins.length; i++) {
            dp[i][0] = 1;
        }

        for(let i = coins.length-1; i >= 0; i--) {
            for(let a = 0; a <= amount; a++) {
                dp[i][a] = dp[i+1][a]
                if(a >= coins[i]) {
                    dp[i][a] += dp[i][a - coins[i]]
                }
            }
        }

        return dp[0][amount];
    }
}
