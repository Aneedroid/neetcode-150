class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        const set = new Set();
        let res = 0;

        while(r < s.length) {
            if(!set.has(s[r])) {
                // This character r is not in the list
                set.add(s[r]);
                r += 1;
                res = Math.max(res, r - l);
            } else {
                // If this char is in the list;
                // s[r] is already present; So we need to start, l and r from here.
                // But we also need to delete all elements from set from l to r;
                // We need to shift l to a point where s[l] is not found in set && reset r to that point;
                // I think we need to remove only until s[l] === s[r]
                while(set.has(s[r])) {
                    set.delete(s[l]);
                    l += 1;
                }
            }
        }

        return res;
    }
}
