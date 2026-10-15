class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const getDistance = (a) => Math.sqrt(a[0] ** 2 + a[1] ** 2);

        const mpq = new MinPriorityQueue(e => e[2], null);

        for(const p of points) {
            mpq.push([p[0], p[1], getDistance(p)]);
        }

        const res = [];

        while(k) {
            const popped = mpq.pop();
            res.push([popped[0], popped[1]]);
            k -= 1;
        }

        return res;
    }
}
