class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Map
        const adj = new Map();
        // First construct the map and list all the courses
        for(let i = 0; i < numCourses; i++) {
            adj.set(i, []);
        }

        // For every index in prereq, map it to adjList
        for(const p of prerequisites) {
            adj.get(p[0]).push(p[1]);
        }

        const visited = new Set();

        const dfs = (i) => {
            if(visited.has(i)) {
                return false;
            }

            if(adj.get(i).length === 0) {
                return true;
            }

            visited.add(i);
            const dependents = adj.get(i);
            for(const deps of dependents) {
                if(!dfs(deps)) return false;
            }

            adj.set(i, []);
            visited.delete(i);
            return true;
        }


        for(const [k, v] of adj) {
            if(!dfs(k)) return false;
        }

        return true;
    }
}
