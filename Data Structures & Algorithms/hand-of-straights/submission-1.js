class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;

        const map = new Map();
        hand.forEach(h => map.set(h, (map.get(h) || 0) + 1));

        const minpq = new MinPriorityQueue();
        for(const key of map.keys()) {
            minpq.push(key);
        }

        while(!minpq.isEmpty()) {
            const first = minpq.front();
            for(let i = first; i < first + groupSize; i++) {
                if(!map.has(i) || map.get(i) === 0) return false;
                map.set(i, map.get(i) - 1);
                if(map.get(i) === 0) {
                    if(i !== minpq.front()) {
                        return false;
                    }
                    minpq.pop();
                }
            }
        }
        return true;
    }
}
