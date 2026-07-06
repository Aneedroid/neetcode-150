class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const map = new Map();
        map.set('+', (a, b) => a + b);
        map.set('-', (a, b) => a - b);
        map.set('*', (a, b) => a * b);
        map.set('/', (a, b) => Math.trunc(a / b));

        const op = ['+', '-', '*', '/'];

        for(let i = 0; i < tokens.length; i++) {
            if(op.includes(tokens[i])) {
                const second = stack.pop();
                const first = stack.pop();
                stack.push(map.get(tokens[i])(first, second));
            } else {
                stack.push(Number(tokens[i]));
            }
        }
        return stack.pop();
    }
}
