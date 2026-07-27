class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];
        
        const board = Array.from({length: n}, () => Array(n).fill('.'));
        const colSet = new Set();
        const positiveDiagonalSet = new Set();
        const negativeDiagonalSet = new Set();

        const backtrack = (r) => {
            if(r === n) {
                const x = [...board].map(b => b.join(''));
                res.push(x);
                return;
            }

            for(let c = 0; c < n; c++) {
                if(
                    colSet.has(c) ||
                    positiveDiagonalSet.has(r + c) ||
                    negativeDiagonalSet.has(r - c)
                ) {
                    continue;
                }

                colSet.add(c);
                positiveDiagonalSet.add(r + c);
                negativeDiagonalSet.add(r - c);
                board[r][c] = 'Q';

                backtrack(r + 1);

                colSet.delete(c);
                positiveDiagonalSet.delete(r + c);
                negativeDiagonalSet.delete(r - c);
                board[r][c] = '.';
            }
        }
        backtrack(0);

        return res;
    }
}
