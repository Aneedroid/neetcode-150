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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast = head;
        let slow = head;
        let d = 0;
        while(d <= n) {
            if(!fast) break;
            fast = fast.next;
            d++;
        }
        console.log('Found fast first : ', fast, d);
        if(fast === null && d < n) return null;
        if(fast === null && d === n) {
            return head.next;
        }
        console.log('Iterating: ');
        while(fast) {
            slow = slow.next;
            fast = fast.next;
        }
        console.log('Slow, fast: ', slow, fast);
        if(slow.next.next) {
            slow.next = slow.next.next;
        } else {
            slow.next = null;
        }
        return head;
    }
}
