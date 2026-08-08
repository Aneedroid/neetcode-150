class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const map = new Map();

        const dfs = (i) => {
            if(map.has(i)) {
                return map.get(i);
            }

            if (i >= s.length) return 1;
            if (s[i] === "0") return 0;

            let res = dfs(i + 1);
            if (i + 1 < s.length) {
                let num = Number(s[i] + s[i + 1]);
                if (num <= 26 && num >= 10) {
                    res += dfs(i + 2);
                }
            }
            map.set(i, res);
            return res;
        };

        return dfs(0);
    }
}
