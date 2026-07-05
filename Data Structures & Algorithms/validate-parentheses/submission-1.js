class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map();
        map.set(']', '[');
        map.set('}', '{');
        map.set(')', '(');
        const stack = [];
        for(let i = 0; i < s.length; i++) {
            if(
                s[i] === '(' ||
                s[i] === '{' ||
                s[i] === '['
            ) {
                stack.push(s[i]);
            } else {
                if(map.get(s[i]) !== stack.pop()) return false;
            }
        }
        return stack.length === 0 ? true : false;
    }
}
