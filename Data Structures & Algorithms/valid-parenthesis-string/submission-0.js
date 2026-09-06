class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const stack = [];
        const star = [];
        for(let i = 0; i < s.length; i++) {
            if(s[i] === '(') {
                stack.push(i);
            } else if(s[i] === '*') {
                star.push(i);
            } else {
                // Means ) was received;
                // so pop left when u have it first
                if(stack.length === 0 && star.length === 0) {
                    return false;
                }

                if(stack.length > 0) {
                    stack.pop();
                } else if(star.length > 0) {
                    star.pop();
                }
            }
        }

        while(stack.length > 0 && star.length > 0) {
            if(stack.pop() > star.pop()) {
                return false;
            }
        }

        return stack.length === 0;
    }
}
