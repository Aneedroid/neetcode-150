class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // Scan through each pair of indices
        // IF it's 1 and not visited already
        // Increment counter
        // Call Dfs() until all 1s are visited
        // Mark visited.
        // Call DFS in all 4 directions
        // Return counter;
        let res = 0;
        const visited = new Set();
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        const dfs = (r, c) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                visited.has(`${r},${c}`) ||
                grid[r][c] === '0'
            ) {
                return;
            }

            visited.add(`${r},${c}`);

            for(const dir of directions) {
                dfs(r + dir[0], c + dir[1]);
            }
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(
                    grid[i][j] === '1' && 
                    !visited.has(`${i},${j}`)
                ) {
                    res += 1;
                    dfs(i, j);
                }
            }
        }

        return res;
    }
}
