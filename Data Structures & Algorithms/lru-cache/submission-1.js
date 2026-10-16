class Node {
    constructor(key = -1, val = -1, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;

        // head.next -> MRU
        // tail.prev -> LRU

        this.head = new Node();
        this.tail = new Node();

        this.head.next = this.tail;
        this.tail.prev = this.head; 
    }

    // Helper function to remove node from DLL
    removeNode(node) {
        const left = node.prev;
        const right = node.next;

        left.next = right;
        right.prev = left;
    }

    insertFront(node) {
        // Insert between head and first node;
        // existing: Head -> first
        // expected: Head -> node -> first
        const first = this.head.next;
        this.head.next = node;
        node.prev = this.head;

        node.next = first;
        first.prev = node;
    };

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        // Retrieving key will also count as used
        this.removeNode(node);
        this.insertFront(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;

            // Update recency;
            this.removeNode(node);
            this.insertFront(node);
            return;
        }
        // Add to cache
        const node = new Node(key, value);
        this.map.set(key, node);
        // Now insert at front.
        this.insertFront(node);

        // If capacity is excess, remove at end
        if(this.map.size > this.capacity) {
            const nodeToDelete = this.tail.prev;
            this.removeNode(nodeToDelete);
            this.map.delete(nodeToDelete.key);
        }
    }
}
