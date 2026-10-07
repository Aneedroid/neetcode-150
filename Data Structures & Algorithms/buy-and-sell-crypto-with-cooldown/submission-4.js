class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const map = new Map();
        const dfs = (i, isBuy) => {
            if(map.has(`${i},${isBuy}`)) {
                return map.get(`${i},${isBuy}`);
            }

            if(i >= prices.length) {
                return 0;
            }

            let res;
            if(isBuy === null) {
                res = Math.max(dfs(i + 1, null), dfs(i + 1, true) - prices[i]);
            } else if(isBuy) {
                res = Math.max(prices[i] + dfs(i + 1, false), dfs(i + 1, true));
            } else {
                res = dfs(i + 1, null);
            }

            map.set(`${i},${isBuy}`, res);
            return res;
        };

        return dfs(0, null);
    }
}
