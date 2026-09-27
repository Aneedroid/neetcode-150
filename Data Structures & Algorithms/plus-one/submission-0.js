class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] < 9) {
                digits[i] += 1;
                return digits;
            }
            digits[i] = 0;
        }
        const res = new Array(digits.length + 1).fill(0);
        res[0] = 1;
        return res;
    }
}
