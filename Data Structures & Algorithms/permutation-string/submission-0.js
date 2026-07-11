class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const c1 = new Array(26).fill(0);
        const c2 = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++) {
            c1[s1[i].charCodeAt() - 'a'.charCodeAt()] += 1;
            c2[s2[i].charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        
        let matched = 0;

        for(let i = 0; i < 26; i++) {
            if(c1[i] === c2[i]) matched++;
        }
        let l = 0;
        for(let r = s1.length; r < s2.length; r++) {
            if(matched === 26) return true;

            c2[s2[r].charCodeAt() - 'a'.charCodeAt()] += 1;
            if(c1[s2[r].charCodeAt() - 'a'.charCodeAt()] === c2[s2[r].charCodeAt() - 'a'.charCodeAt()]) matched += 1;
            else if (c1[s2[r].charCodeAt() - 'a'.charCodeAt()] + 1 === c2[s2[r].charCodeAt() - 'a'.charCodeAt()]) matched -= 1;

            c2[s2[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
            if(c1[s2[l].charCodeAt() - 'a'.charCodeAt()] === c2[s2[l].charCodeAt() - 'a'.charCodeAt()]) matched += 1;
            else if(c1[s2[l].charCodeAt() - 'a'.charCodeAt()] - 1 === c2[s2[l].charCodeAt() - 'a'.charCodeAt()]) matched -= 1;

            l++;
        }
        
        return matched === 26;
    }
}
