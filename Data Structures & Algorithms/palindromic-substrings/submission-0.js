class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        const findMaxPalindrome = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                count += 1;
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            findMaxPalindrome(i, i);
            findMaxPalindrome(i, i + 1);
        }

        return count;
    }
}
