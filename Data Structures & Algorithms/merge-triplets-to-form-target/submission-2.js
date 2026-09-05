class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const copy = triplets.filter(t => t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]);

        console.log('valid: ', copy);
        if(!copy.length) return false;
        // Copy now has only valid mappings;
        const stack = [copy[0]];
        
        for(let i = 1; i < copy.length; i++) {
            console.log('stack: ', stack);
            let top = stack[stack.length - 1];
            if(top[0] === target[0] && top[1] === target[1] && top[2] === target[2]) {
                return true;
            }

            let temp = stack.pop();
            stack.push([Math.max(temp[0], copy[i][0]), Math.max(temp[1], copy[i][1]), Math.max(temp[2], copy[i][2])]);
        }

        let top = stack[stack.length - 1];
        if(top[0] === target[0] && top[1] === target[1] && top[2] === target[2]) {
            return true;
        }

        return false;
    }
}
