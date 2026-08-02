class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        // Same concept..
        const queue = [];
        const visited = new Set();
        let fresh = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 2) {
                    queue.unshift([i, j]);
                    visited.add(`${i},${j}`);
                }
                if(grid[i][j] === 1) fresh++;
            }
        }

        // If queue is empty and fresh fruits are there
        // No rotten and no fresh fruits are there
        if(queue.length === 0 && fresh === 0) return 0;
        // If queue is empty --> NO rotten
        if(queue.length === 0) return -1;
        // Queue should now have all rotten;
        let time = 0;
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        const pushToQueue = (r, c) => {
            if(
                r < 0 ||
                c < 0 ||
                r >= grid.length ||
                c >= grid[0].length ||
                visited.has(`${r},${c}`) ||
                grid[r][c] === 0
            ) {
                return;
            }

            visited.add(`${r},${c}`);
            queue.unshift([r, c]);
            fresh -= 1;
        };

        while(queue.length > 0) {
            const len = queue.length;
            for(let i = 0; i < len; i++) {
                const [nr, nc] = queue.pop();
                for(const [dr, dc] of directions) {
                    pushToQueue(nr + dr, nc + dc);
                }
            }
            time += 1;
        }

        return fresh ? - 1: time -1 ;
    }
}
