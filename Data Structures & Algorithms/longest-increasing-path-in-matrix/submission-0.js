class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const lip = Array.from({ length: matrix.length }, () => new Array(matrix[0].length));

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        const dfs = (r, c, prev) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                matrix[r][c] <= prev
            ) {
                return 0;
            }

            if(lip[r][c]) {
                return lip[r][c];
            }

            let res = 1;
            const curr = matrix[r][c];
            res = Math.max(res, 1 + dfs(r + 1, c, curr));
            res = Math.max(res, 1 + dfs(r - 1, c, curr));
            res = Math.max(res, 1 + dfs(r, c + 1, curr));
            res = Math.max(res, 1 + dfs(r, c - 1, curr));

            lip[r][c] = res;
            return res;
        }

        let mx = 0;
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                mx = Math.max(mx, dfs(i, j, -1));
            }
        }

        return mx;
    }
}
