class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const queue = new MaxPriorityQueue((q) => q[1]);

        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for(const [k, v] of map) {
            queue.enqueue([k, v]);
        }

        let res = [];

        while(k > 0) {
            res.push(queue.dequeue()[0]);
            k--;
        }

        return res;
    }
}
