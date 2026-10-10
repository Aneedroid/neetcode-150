class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const good = new Set();

        for(const [a, b, c] of triplets) {
            if(a > target[0] || b > target[1] || c > target[2]) {
                continue;
            }

            if(a === target[0]) {
                good.add(0);
            }

            if(b === target[1]) {
                good.add(1);
            }

            if(c === target[2]) {
                good.add(2);
            }
        }

        return good.size === 3;
    }
}
