class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const res = [];
        const mpq = new MinPriorityQueue((p) => p.distance);
        const getDistance = (x) => ({
            distance: Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2)),
            points: x
        });

        points.forEach(p => mpq.enqueue(getDistance(p)));

        while(k) {
            res.push(mpq.dequeue().points);
            k--;
        }

        return res;
    }
}
