class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b !== 0) {
            // Finds all the carry bits
            let carry = a & b;
            // Does a sum of bits without carry
            a = a ^ b;
            // shift carry to the left by 1 so that it can be added next
            b = carry << 1;
        }

        // Force it back to 32 bits.
        return a | 0;
    }
}
