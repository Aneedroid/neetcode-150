class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map_1 = new Map();
        const map_2 = new Map();
        s.split('').forEach(c => map_1.set(c, (map_1.get(c) || 0) + 1));
        t.split('').forEach(c => map_2.set(c, (map_2.get(c) || 0) + 1));

        if(map_1.size !== map_2.size) return false;

        for(const [k, v] of map_1) {
            if(!map_2.has(k) || map_2.get(k) !== v) {
                return false;
            }
        }

        return true;
    }
}
