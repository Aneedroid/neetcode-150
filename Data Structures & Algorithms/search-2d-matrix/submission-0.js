class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        while(l <= r) {
            console.log('Start l, r: ', l, r);
            const m = l + Math.floor((r - l) / 2);
            // This will be mth row
            if(matrix[m][0] <= target && matrix[m][matrix[0].length - 1] >= target) {
                return matrix[m].includes(target);
            }
            if(matrix[m][0] > target) {
                r = m - 1;
            }
            if(matrix[m][matrix[0].length - 1] < target) {
                l = m + 1;
            }
        }
        return false;
    }
}
