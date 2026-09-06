class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const last = new Map();
        S.split('').forEach((s, index) => last.set(s, index));
        let count = 0;
        let end = 0;
        let res = [];
        for(let i = 0; i < S.length; i++) {
            count += 1;
            end = Math.max(end, last.get(S[i]));
            if(i === end) {
                res.push(count);
                count = 0;
            }
        }
        return res;
    }
}
