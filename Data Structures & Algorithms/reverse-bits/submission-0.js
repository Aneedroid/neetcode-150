class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;

        for(let i = 0; i < 32; i++) {
            let bit = n & 1;
            res = res << 1 | bit;
            n = n >>> 1;
        }

        return res >>> 0;
    }
}
