class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0;
        let r = 0;
        let max = 0;
        while(r < s.length) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r])
            max = Math.max(max, r - l + 1);
            r++;
        }
        return max;
    }
}
