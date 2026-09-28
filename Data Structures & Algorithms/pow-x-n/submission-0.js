class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(x === 0) return 0;
        if(n === 0) return 1;

        const pow = (x, n) => {
            if(n === 1) return x;

            if(n % 2 === 0) {
                const p = pow(x, n / 2);
                return p * p;
            } else {
                const p = pow(x, (n-1) / 2);
                return p * p * x;
            }
        }

        const res = pow(x, Math.abs(n));
        return n < 0 ? 1/res : res;
    }
}
