class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let i = 0; i < strs.length; i++) {
            res += `${strs[i].length}#${strs[i]}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let numStr = '';
        const res = [];
        let i = 0;
        while(i < str.length) {
            if(str.charAt(i) === '#' || i === str.length - 1) {
                res.push(str.substring(i+1, Number(numStr) + i + 1));
                i += (Number(numStr) + 1);
                numStr = '';
            } else {
                numStr += str.charAt(i);
                i += 1;
            }
        }
        return res;
    }
}
