class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const visited = new Set();

        const dfs = (r, c, i) => {
            if(i === word.length) {
                return true;
            }
            
            if(
                r < 0 ||
                c < 0 ||
                r >= board.length ||
                c >= board[0].length ||
                visited.has(`${r},${c}`) ||
                board[r][c] !== word[i]
            ) {
                return false;
            }

            visited.add(`${r},${c}`);

            for(const d of dir) {
                if(dfs(r + d[0], c + d[1], i+1)) {
                    return true;
                }
            }
            visited.delete(`${r},${c}`)
        };
        
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
