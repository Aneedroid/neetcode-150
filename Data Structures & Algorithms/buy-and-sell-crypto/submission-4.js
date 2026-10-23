class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length < 1) {
            return 0;
        }

        let l = 0;
        let r = 1;
        let max = 0;

        while(r < prices.length) {
            if(prices[r] > prices[l]) {
                max = Math.max(max, prices[r] - prices[l]);
            } else {
                // Means r value is lesser than l; So can't buy here, move l and r;
                l = r;
            }
            r += 1;
        }

        return max;
    }
}
