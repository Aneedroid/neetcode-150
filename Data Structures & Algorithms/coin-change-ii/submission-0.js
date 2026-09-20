class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const map = new Map();

        const dfs = (i, amt) => {
            if(i >= coins.length || amt > amount) {
                return 0;
            }
            if(amt === amount) {
                return 1;
            }
            const key = JSON.stringify(`${i},${amt}`);
            if(map.has(key)) {
                return map.get(key);
            }

            const val = dfs(i, amt + coins[i]) + dfs(i + 1, amt);
            map.set(key, val);

            return map.get(key);
        };

        return dfs(0, 0);
    }
}
