class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const colMap = new Map();
        const subGridMap = new Map();

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') continue;
                const subGridKey = `${Math.floor(i/3)},${Math.floor(j/3)}}`
                if(
                    (rowMap.get(i) && rowMap.get(i).has(board[i][j])) ||
                    (colMap.get(j) && colMap.get(j).has(board[i][j])) ||
                    (subGridMap.get(subGridKey) && 
                    subGridMap.get(subGridKey).has(board[i][j]))
                ) {
                    return false;
                }
                if(!rowMap.has(i)) {
                    rowMap.set(i, new Set());
                }
                if(!colMap.has(j)) {
                    colMap.set(j, new Set());
                }
                if(!subGridMap.has(subGridKey)) {
                    subGridMap.set(subGridKey, new Set());
                }
                rowMap.get(i).add(board[i][j]);
                colMap.get(j).add(board[i][j]);
                subGridMap.get(subGridKey).add(board[i][j]);
            }
        }
        return true;
    }
}
