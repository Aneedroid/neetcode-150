class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                // For each i,j
                // Row -> (1, 4) -> 1,0 1,1 1,2 -> i stays, move j
                const val = board[i][j];
                for(let c = 0; c < 9; c++) {
                    if(val !== '.' && val === board[i][c] && j !== c) {
                        return false;
                    }
                }
                // Col -> (2, 4) -> 0,4 1,4 2,4 -> i moves, j stays
                for(let r = 0; r < 9; r++) {
                    if(val !== '.' && val === board[r][j] && i !== r) {
                        return false;
                    }
                }
                // Sub Matrix check
                // Find Submatrix ceil and floor based on i,j
                // 4,7 => 4/3, 7/3 => 1 * 3, 2 * 3 => 3, 6
                const rowFloor = Math.floor(i / 3) * 3;
                const colFloor = Math.floor(j / 3) * 3;
                for(let r = rowFloor; r < rowFloor + 3; r++) {
                    for(let c = colFloor; c < colFloor + 3; c++) {
                        if(val !== '.' && val === board[r][c] && i !== r && j !== c) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
}
