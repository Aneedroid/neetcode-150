class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
        multiply(num1, num2) {
        let ans = new Array(num1.length + num2.length).fill(0); // digit array instead of a Number

        for(let i = num1.length - 1; i >= 0; i--) {
            let c = 0;
            let shift = num1.length - 1 - i;
            for(let j = num2.length - 1; j >= 0; j--) {
                let m = num2.length - 1 - j;
                let val = (num1[i] * num2[j]) + c;

                let pos = ans.length - 1 - (shift + m);   // where this digit lands in the array
                let sum = val % 10 + ans[pos];             // add into whatever's already there

                ans[pos] = sum % 10;
                c = Math.floor(val / 10) + Math.floor(sum / 10);
            }
            // flush leftover carry, one position further left
            let pos = ans.length - 1 - (shift + num2.length);
            ans[pos] += c;
        }

        // strip leading zeros, then join digits into the final string
        let str = ans.join('');
        let start = 0;
        while (start < str.length - 1 && str[start] === '0') start++;
        return str.slice(start);
    }
}
