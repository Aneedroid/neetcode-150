class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let res = 0;
        let boundedNumber = Math.pow(2, 31);
        const MIN = -boundedNumber;
        const MAX = boundedNumber;

        while(x !== 0) {
            let digit = x % 10;
            x = Math.trunc(x / 10);

            if(
                res > (MAX/ 10) ||
                res < (MIN/10)
            ) {
                return 0;
            }

            res = res * 10 + digit;
        }

        return res;
    }
}
