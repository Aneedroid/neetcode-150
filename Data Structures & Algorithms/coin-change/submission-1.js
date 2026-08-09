class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const map = new Map();

        const dfs = (amt) => {
            if(map.has(amt)) {
                return map.get(amt);
            }

            if(amt < 0) {
                // cannot reach target;
                // Just return, invalid case.
                return Infinity;
            }

            if(amt === 0) {
                // Amount is now 0
                // Which means this path has reached target
                // Set res if min
                return 0;
            }


            // We need to set the minimum of all subCalls here;
            let min = Infinity;
            for(const c of coins) {
                const ans = dfs(amt - c);
                min = Math.min(min, ans + 1);
            }
            
            map.set(amt, min);
            return min;
        }

        const res = dfs(amount, 0);

        return res === Infinity ? -1 : res;
    }
}
