class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const mpq = new MaxPriorityQueue();
        stones.forEach((s) => mpq.enqueue(s));

        while (mpq.size() > 1) {
            let y = mpq.dequeue();
            let x = mpq.dequeue();

            if (x < y) {
                mpq.enqueue(y - x);
            }
        }
        return mpq.front() ? mpq.front() : 0;
    }
}
