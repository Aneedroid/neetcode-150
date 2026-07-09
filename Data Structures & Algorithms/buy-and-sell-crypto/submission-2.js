class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let max = 0;
        while(r < prices.length) {
            max = Math.max(prices[r] - prices[l], max);
            if(prices[l] > prices[r]) {
                l = r;
            }
            r++;
        }
        return max;
    }
}
