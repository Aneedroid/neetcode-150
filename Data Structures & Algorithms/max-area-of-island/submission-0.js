class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let maxArea = 0;
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        const dfs = (r, c) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                visited.has(`${r},${c}`) ||
                grid[r][c] === 0
            ) {
                return 0;
            }

            // console.log('r, c: ', r, c);
            visited.add(`${r},${c}`);
            let res = 1;
            for(const d of directions) {
                res += dfs(r + d[0], c + d[1]);
            }
            return res;
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(!visited.has(`${i},${j}`)) {
                    // console.log('starting measurement for ', i, j);
                    const x = dfs(i, j)
                    // console.log('value: ', x);
                    maxArea = Math.max(x, maxArea);
                }
            }
        }

        return maxArea;
    }
}