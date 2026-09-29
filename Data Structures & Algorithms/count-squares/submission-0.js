class CountSquares {
    constructor() {
        this.points = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        const key = `${x},${y}`;
        this.points.set(key, (this.points.get(key) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;
        const [x, y] = point;
        for(const [key, val] of this.points) {
            // Need to spread the key
            const [px, py] = key.split(',').map(Number);
            if(Math.abs(px - x) !== Math.abs(py - y) || x === px || y === py) {
                continue;
            }
            res += val * (this.points.get(`${x},${py}`) || 0) * (this.points.get(`${px},${y}`) || 0);
        }
        return res;
    }
}
