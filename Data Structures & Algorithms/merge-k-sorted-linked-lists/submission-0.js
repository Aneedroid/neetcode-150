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
    merge2Lists(l1, l2) {
        let dummy = new ListNode();
        let res = dummy;
        
        while(l1 && l2) {
            if(l1.val <= l2.val) {
                res.next = l1;
                l1 = l1.next;
            } else {
                res.next = l2;
                l2 = l2.next;
            }
            res = res.next;
        }

        if(l1) {
            res.next = l1;
        }

        if(l2) {
            res.next = l2;
        }

        return dummy.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;

        while(lists.length > 1) {
            console.log('lists: ', lists);
            const mergedLists = [];
            for(let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                const mergedRes = this.merge2Lists(l1, l2);
                console.log('mergedRes: ', mergedRes);
                mergedLists.push(mergedRes);
            }
            lists = mergedLists;
        }
        return lists[0];
    }
}
