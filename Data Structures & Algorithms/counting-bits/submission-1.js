class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if(n === 0) return [0];
        const getOneBitsCount = (i) => {
            let res = 0;
            // 0 & 1 -> 0
            // 1 & 1 -> 1
            while(i !== 0) {
                let bit = i & 1;
                if(bit) {
                    res += 1;
                }
                i = i >>> 1;
            }
            return res;
        }

        const op = new Array(n + 1).fill(0);
        return op.map((i, idx) => getOneBitsCount(idx));
    }
}
