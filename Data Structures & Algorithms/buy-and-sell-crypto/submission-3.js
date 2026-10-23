class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];

        for(let p of prices) {
            maxProfit = Math.max(maxProfit, p - minPrice);
            minPrice = Math.min(minPrice, p);
        }

        return maxProfit;
    }
}
