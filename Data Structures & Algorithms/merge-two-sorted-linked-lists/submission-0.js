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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;
        let res = new ListNode(-1, null);
        let resHead = res;
        while(curr1 || curr2) {
            if(curr1 && curr2) {
                if(curr1.val <= curr2.val) {
                    res.next = curr1;
                    curr1 = curr1.next;
                } else {
                    res.next = curr2;
                    curr2 = curr2.next;
                }
            } else if (curr1) {
                res.next = curr1;
                curr1 = curr1.next;
            } else {
                res.next = curr2;
                curr2 = curr2.next;
            }
            res = res.next;
        }
        return resHead.next;
    }
}
