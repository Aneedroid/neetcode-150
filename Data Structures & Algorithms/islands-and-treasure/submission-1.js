class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const q = [];
        const visited = new Set();

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 0) {
                    q.unshift([i, j]);
                    visited.add(`${i},${j}`);
                }
            }
        }

        const addNum = (r, c) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                visited.has(`${r},${c}`) ||
                grid[r][c] === -1
            ) {
                return;
            }

            visited.add(`${r},${c}`);
            q.unshift([r, c]);
        }

        let d = 0;
        while(q.length > 0) {
            const len = q.length;
            // These are the elements from Q and gotta do BFS on them
            for(let i = 0; i < len; i++) {
                const [row, col] = q.pop();
                grid[row][col] = d;
                addNum(row - 1, col);
                addNum(row, col + 1);
                addNum(row + 1, col);
                addNum(row, col - 1);
            }
            d += 1;
        }
    }
}
