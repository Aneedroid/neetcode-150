class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minq = new MinPriorityQueue();
        this.k = k;
        for(let i = 0; i < nums.length; i++) {
            this.minq.push(nums[i]);
        }

        while(this.minq.size() > k) {
            this.minq.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minq.push(val);
        if(this.k < this.minq.size()) {
            this.minq.pop();
        }
        return this.minq.front();
    }
}
