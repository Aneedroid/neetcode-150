class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Window len - Most freq <= k
        const count = {};
        let l = 0;
        let r = 0;
        let max = 0;

        for(let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            if(r - l + 1 - Math.max(...Object.values(count)) > k) {
                count[s[l]] -= 1;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}
