class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // Map
        const adj = new Map();
        // First construct the map and list all the courses
        for (let i = 0; i < numCourses; i++) {
            adj.set(i, []);
        }

        // For every index in prereq, map it to adjList
        for (const p of prerequisites) {
            adj.get(p[0]).push(p[1]);
        }

        const cycle = new Set();
        const visited = new Set();
        const res = [];

        const dfs = (i) => {
            if (cycle.has(i)) {
                return false;
            }

            if(visited.has(i)) {
                return true;
            }

            cycle.add(i);
            const dependents = adj.get(i);
            for (const deps of dependents) {
                if (!dfs(deps)) return false;
            }

            visited.add(i);
            cycle.delete(i);
            res.push(i);
            return true;
        };

        for (const [k, v] of adj) {
            if (!dfs(k, [])) return [];
        }

        return res;
    }
}
