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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // Now slow will be mid
        // Reverse link from slow to end
        let prev = null;
        let curr = slow;
        
        while(curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // Prev is now reversed.
        let currLast = prev;
        let currFront = head;
        while(currLast.next) {
            const tempFront = currFront.next;
            const tempLast = currLast.next;
            currFront.next = currLast;
            currLast.next = tempFront;

            currFront = tempFront;
            currLast = tempLast;
        }
    }
}
