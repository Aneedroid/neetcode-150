class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLen = 0;
        let start = -1;

        const findMaxPalindrome = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > maxLen) {
                    maxLen = r - l + 1;
                    start = l;
                }
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            findMaxPalindrome(i, i);
            findMaxPalindrome(i, i + 1);
        }

        return s.substring(start, start + maxLen);
    }
}
