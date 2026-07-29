class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const mpq = new MaxPriorityQueue((n) => n);
        for(const n of nums) {
            mpq.enqueue(n);
        }

        let res;
        while(k > 0) {
            res = mpq.dequeue();
            k--;
        }
        return res;
    }
}
