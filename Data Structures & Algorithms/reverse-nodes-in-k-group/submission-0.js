/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while(true) {
            let kth = this.getKth(groupPrev, k);
            if(!kth) break;
            let groupNext = kth.next;

            let curr = groupPrev.next;
            let prev = kth.next;

            while(curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            // Now update the groupPrevs and pointers;
            const tmp = groupPrev.next; // This is now the tail of the new group
            groupPrev.next = kth; // Last of prev group will now be the head of the prev group
            groupPrev = tmp;
        }
        return dummy.next;
    }

    getKth(curr, k) {
        while(curr && k) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
