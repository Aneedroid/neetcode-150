class Node {
    constructor(key = 0, val = 0, next = null, prev = null) {
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
        this.cache = new Map();
        this.cap = capacity;
        this.left = new Node();
        this.right = new Node();

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Insert Doubly linked list
    insert(node) {
        // Inserts are at the end
        let prev = this.right.prev;
        let next = this.right;

        prev.next = node;
        node.prev = prev;

        next.prev = node;
        node.next = next;
    }

    // Remove
    remove(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }


    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // Gotta update the frequency for this key
        // Remove from existing place in the linked list
        // Append to the end.
        if(this.cache.has(key)) {
            const node = this.cache.get(key); 
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // If present, remove from list as we need to update with new value
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        // Set new value in cache
        this.cache.set(key, new Node(key, value));
        // Insert it with linked list
        this.insert(this.cache.get(key));

        if(this.cache.size > this.cap) {
            // Remove the left most
            // Find left most from left
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
