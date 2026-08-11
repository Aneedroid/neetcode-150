class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const map = new Map();

        const dfs = (i, str) => {
            if(map.has(i)) {
                return map.get(i);
            }

            if(i >= s.length) {
                return false;
            }

            // You need to check if from i index to i + str.length string = str
            if(s.substring(i, i + str.length) !== str) {
                i += str.lenght;
                map.set(i, false);
                return false;
            }

            // If true => New i is calculated
            i += str.length;
            // Need to check if i is full;
            if(i === s.length) {
                return true;
            }

            for(const word of wordDict) {
                if(dfs(i, word)) {
                    return true;
                }
            }

            map.set(i, false);
            return false;
        };

        return dfs(0, '');
    }
}
