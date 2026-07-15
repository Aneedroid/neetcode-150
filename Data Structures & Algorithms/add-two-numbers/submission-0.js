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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1 = l1;
        let curr2 = l2;
        let res = new ListNode();
        let dummy = res;
        let carry = 0;
        console.log('huh?')
        while(curr1 || curr2) {
            console.log('curr1, curr2: ', curr1?.val, curr2?.val);
            let l1Num = curr1 ? curr1.val : 0;
            let l2Num = curr2 ? curr2.val : 0;
            console.log('l1Num, l2Num: ', l1Num, l2Num);

            let sum = l1Num + l2Num + carry;
            let newNode = new ListNode();

            console.log('sum: ', sum);
            if(sum > 9) {
                newNode.val = sum % 10;
                carry = Math.floor(sum / 10);
            } else {
                newNode.val = sum;
                carry = 0;
            }

            console.log('newNode: ', newNode, carry);
            res.next = newNode;

            res = res.next;
            if(curr1) curr1 = curr1.next;
            if(curr2) curr2 = curr2.next;
        }

        console.log('loop broke: ', curr1, curr2);
        console.log('dummy: ', res, dummy, carry);
        if(carry) {
            res.next = new ListNode(carry, null);
        }

        return dummy.next;
    }
}
