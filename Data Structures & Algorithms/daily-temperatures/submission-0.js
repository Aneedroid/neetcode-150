class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length && stack[stack.length - 1][0] < temperatures[i]) {
                const [_, idx] = stack.pop();
                res[idx] = i - idx;
            }
            stack.push([temperatures[i], i]);
        }
        return res;
    }
}
