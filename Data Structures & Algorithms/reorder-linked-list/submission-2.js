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
        if(!head) return;
        if(!head?.next?.next) return head;

        let slow = head;
        let fast = head.next;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // From slow to end now, need to reverse it.
        let curr = slow.next;
        slow.next = null;
        let prev = null;

        while(curr) {
            // Have prev;
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // So now we have prev and head;
        let curr1 = head;
        let curr2 = prev;
        
        while(curr1 && curr2) {
            let temp1 = curr1.next;
            let temp2 = curr2.next;

            curr1.next = curr2;
            curr2.next = temp1;

            curr1 = temp1;
            curr2 = temp2;
        }

        return head;
    }
}
