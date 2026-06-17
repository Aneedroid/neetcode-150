class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let s of strs) {
            const count = new Array(26).fill(0);
            for(let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let str = count.join(',');
            
            if(map.has(str)) {
                map.get(str).push(s);
            } else {
                map.set(str, [s]);
            }
        }

        return [...map.values()];
    }
}
