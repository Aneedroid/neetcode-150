class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // Idea is to traverse grid, find treasure idx
        // Perform dfs there and go to only idx that are traversable
        // Each time you traverse to a grid like that,
        // calculate their distance from the trasure and set the minimum to that grid
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const dfs = (r, c, d) => {
            // If in these cases, nothing to do, we cant traverse these, so return
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                grid[r][c] < d
            ) {
                return;
            }
            // We came to a valid index;
            if(d > 0) {
                // Set
                grid[r][c] = Math.min(d, grid[r][c]);
            }

            for(const dir of directions) {
                dfs(r + dir[0], c + dir[1], d + 1);
            }

        };

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 0) {
                    dfs(i, j, 0);
                }
            }
        }

        return grid;
    }
}
