class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pacificSet = new Set();
        const atlanticSet = new Set();
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        const dfs = (r, c, set, prevHeight) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= heights.length ||
                c >= heights[0].length ||
                set.has(`${r},${c}`) || 
                heights[r][c] < prevHeight
            ) {
                return;
            }
            set.add(`${r},${c}`);
            for(const dr of directions) {
                dfs(r + dr[0], c + dr[1], set, heights[r][c]);
            }
        }

        for(let c = 0; c < heights[0].length; c++) {
            // Call first row to pacific
            dfs(0, c, pacificSet, heights[0][c]);
            // Call last row to atlantic
            dfs(heights.length - 1, c, atlanticSet, heights[heights.length - 1][c]);
        }

        for(let r = 0; r < heights.length; r++) {
            // Call first left to pacific
            dfs(r, 0, pacificSet, heights[r][0]);
            dfs(r, heights[0].length - 1, atlanticSet, heights[r][heights[0].length - 1]);
        }

        const res = [];
        for(let i = 0; i < heights.length; i++) {
            for(let j = 0; j < heights[0].length; j++) {
                if(pacificSet.has(`${i},${j}`) && atlanticSet.has(`${i},${j}`)) {
                    res.push([i, j]);
                }
            }
        }
        return res;
    }
}
