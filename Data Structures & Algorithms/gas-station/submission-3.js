class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalGas = gas.reduce((a, b) => a + b);
        let totalCost = cost.reduce((a, b) => a + b);
        if(totalGas < totalCost) {
            return -1;
        }

        let tank = 0;
        let res = 0;
        for(let i = 0; i < gas.length; i++) {
            tank += (gas[i] - cost[i]);
            if(tank < 0) {
                // Means start point cant be before this;
                res = i + 1;
                tank = 0;
            }
        }
        return res;
    }
}
