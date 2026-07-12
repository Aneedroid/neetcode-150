class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';
        let tCount = {};
        for(let c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }
        let have = 0
        let need = Object.keys(tCount).length;
        let l = 0;
        let window = {};
        let min = Infinity;
        let res = [-1, -1];
        for(let r = 0; r < s.length; r++) {
            window[s[r]] = (window[s[r]] || 0) + 1;

            if(tCount[s[r]] && window[s[r]] === tCount[s[r]]) {
                have += 1;
            }

            while(have === need) {
                // If have and need are same, can increment left to find better res
                // But set res first and only if greater than max
                if(r - l + 1 < min) {
                    min =  r - l + 1;
                    res = [l, r];
                }
                // Now that res is set, we are going to remove curr l and inc l
                window[s[l]] -= 1;

                if(tCount[s[l]] && window[s[l]] < tCount[s[l]]){
                    have -= 1;
                }
                l++;
            }
        }
        return res === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
