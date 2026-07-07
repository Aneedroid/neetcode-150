class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = new Array(position.length).fill(new Array(2));
        for(let i = 0; i < position.length; i++) {
            pair[i] = [position[i], speed[i]];
        }
        pair.sort((a, b) => a[0] - b[0]);
        const stack = [];
        for(let i = pair.length - 1; i >=0; i--) {
            const t = ((target - pair[i][0]) / pair[i][1]);
            if(stack.length && stack[stack.length - 1] < t) {
                stack.push(t);
            }
            if(stack.length === 0) {
                stack.push(t);
            }
        }
        return stack.length;
    }
}
