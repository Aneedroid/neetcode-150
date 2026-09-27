class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();
        const getHappy = (n) => {
            let res = 0;
            while(n > 0) {
                let digit = n % 10;
                n = Math.floor(n / 10);

                res += digit * digit;
            }
            return res;
        };

        while(n < 1 || !seen.has(n)) {
            seen.add(n);
            n = getHappy(n);
        }

        if(n === 1) return true;
        if(seen.has(n)) return false;
    }
}
