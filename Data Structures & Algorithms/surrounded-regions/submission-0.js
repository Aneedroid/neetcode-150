class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        // Visit all valid index and mark as F
        const dfs = (r, c) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= board.length ||
                c >= board[0].length ||
                board[r][c] !== 'O'
            ) {
                return;
            }
            board[r][c] = 'F';

            for(const dr of directions) {
                dfs(r + dr[0], c + dr[1]);
            }
        }

        // Run a dfs on all outer indices that has O
        // For all valid indices you find with O
        // Mark as F
        for(let c = 0; c < board[0].length; c++) {
            dfs(0, c);
            dfs(board.length - 1, c);
        }

        for(let r = 0; r < board.length; r++) {
            dfs(r, 0);
            dfs(r, board[0].length - 1);
        }

        // Traverse through all index now
        // For all O you find, mark as X
        // For all F you find, mark as O

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] === 'O') board[i][j] = 'X';
                if(board[i][j] === 'F') board[i][j] = 'O';
            }
        }

        return board;
    }
}
