class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length ===  0) return [];
        const res = [];

        const map = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };



        const dfs = (str, i) => {
            if(str.length === digits.length) {
                res.push(str);
                return;
            }

            const alphabets = map[digits[i]];
            for(const a of alphabets) {
                dfs(str + a, i + 1);
            }
        }

        dfs('', 0);

        return res;
    }
}
