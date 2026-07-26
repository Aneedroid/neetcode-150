class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];
        const dfs = (i) => {
            if(i >= s.length) {
                res.push([...part]);
                return;
            }

            for(let j = i; j < s.length; j++) {
                const substr = s.substring(i, j + 1);
                if(isPalindrome(substr)) {
                    part.push(substr);
                    dfs(j + 1);
                    part.pop();
                }
            }
        }

        const isPalindrome = (str) => {
            let l = 0;
            let r = str.length - 1;
            while(l < r) {
                if(str[l] === str[r]) {
                    l++;
                    r--;
                } else {
                    return false;
                }
            }
            return true;
        }

        dfs(0);
        return res;
    }
}
