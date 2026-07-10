class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let l = 0;
        let r = 0;
        let max = 0;

        while(r < s.length) {
            if(map.has(s[r])) {
                l = Math.max(map.get(s[r]) + 1, l);
            }
            map.set(s[r], r);
            max = Math.max(max, r - l + 1);
            r++;
        }

        return max;
    }
}
