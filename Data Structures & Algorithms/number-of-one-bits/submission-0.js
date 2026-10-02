class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        // The idea would be to & the last number with 1;
        // 1 & 1 -> 1
        // 0 & 1 -> 0
        // Once check is done, we can shift right until
        // Num itself is 0
        let res = 0;
        while(n !== 0) {
            let bit = n & 1;
            if(bit) {
                res += 1;
            }

            n = n >>> 1;
        }
        return res;
    }
}
