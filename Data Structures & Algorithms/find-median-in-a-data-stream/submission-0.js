class MedianFinder {
    constructor() {
        this.leftHeap = new MaxPriorityQueue();
        this.rightHeap = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Always add to left heap first
        this.leftHeap.enqueue(num);
        // Check condition if max of left is greater than min of right
        if(
            this.leftHeap.size() > 0 &&
            this.rightHeap.size() > 0 &&
            this.leftHeap.front() > this.rightHeap.front()
        ) {
            // Then, pop from left and move to right;
            const num = this.leftHeap.dequeue();
            this.rightHeap.enqueue(num);
        }

        // Now check the size difference is lesser than or equal to 1
        if(this.leftHeap.size() > this.rightHeap.size() + 1) {
            // Left Heap is heavy
            const num = this.leftHeap.dequeue();
            this.rightHeap.enqueue(num);
        }
        if(this.leftHeap.size() + 1 < this.rightHeap.size()) {
            const num = this.rightHeap.dequeue();
            this.leftHeap.enqueue(num);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.leftHeap.size() > this.rightHeap.size()) {
            return this.leftHeap.front();
        }
        if(this.leftHeap.size() < this.rightHeap.size()) {
            return this.rightHeap.front();
        }
        // Both are same ==> Even
        return (this.leftHeap.front() + this.rightHeap.front()) / 2;
    }
}
