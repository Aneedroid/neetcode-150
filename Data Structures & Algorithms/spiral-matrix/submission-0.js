class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        const res = [];

        while(top <= bottom && left <= right) {
            // Top: Left -> Right
            for(let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
            top += 1;
            // Right: Top -> Bottom
            for(let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            right -= 1;
            // Bottom: Right -> Left

            if(top <= bottom) {
                for(let i = right; i >= left; i--) {
                    res.push(matrix[bottom][i])
                }
                bottom -= 1;
            }
            // Left: Bottom -> Top
            if(left <= right) {
                for(let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left]);
                }
                left += 1;
            }
        }
        return res;
    }
}
