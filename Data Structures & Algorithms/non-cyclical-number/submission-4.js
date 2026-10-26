class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();
        const getSumOfDigits = (num) => {
            let res = 0;

            while(num > 0) {
                let digit  = num % 10;
                res += (digit * digit);
                num = Math.trunc(num / 10);
            }

            console.log('getSumOfDigits: ', res);
            return res;
        }

        while(n !== 1) {
            if(set.has(n)) return false;
            set.add(n);
            n = getSumOfDigits(n);
        }

        return true;
    }
}
