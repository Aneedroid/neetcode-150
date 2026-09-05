class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [t1, t2, t3] = target;
        let m1 = 0, m2 = 0, m3 = 0;
        for(const [a, b, c] of triplets) {
            if(a <= t1 && b <= t2 && c<= t3) {
                m1 = Math.max(a, m1);
                m2 = Math.max(b, m2);
                m3 = Math.max(c, m3);
            }
        }
        return m1 === t1 && m2 === t2 && m3 === t3;
    }
}
