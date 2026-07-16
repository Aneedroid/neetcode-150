// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        const map = new Map();

        const getClone = (node) => {
            if (!node) return null;
            if (!map.has(node)) {
                map.set(node, new Node(node.val));
            }
            return map.get(node);
        };

        let curr = head;
        while (curr) {
            const copy = getClone(curr);
            copy.next = getClone(curr.next);
            copy.random = getClone(curr.random);
            curr = curr.next;
        }

        return map.get(head);
    }
}
