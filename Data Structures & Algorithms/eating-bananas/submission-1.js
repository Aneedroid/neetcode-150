class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let k = r;

        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            let hrs = 0;
            for(let i = 0; i < piles.length; i++) {
                hrs += Math.ceil(piles[i]/m);
            }

            if(hrs <= h) {
                // Good, can find better?
                k = Math.min(k, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return k;
    }
}
