/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    var tempHead = {val: -1, next: null};
    var current = tempHead;
    
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val <= l2.val) {
                current.next = {val: l1.val, next: null};
                l1 = l1.next;
            }
            else {
                current.next = {val: l2.val, next: null};
                l2 = l2.next;          
            }
        }
        else if (l1 != null) {
            current.next = {val: l1.val, next: null};
            l1 = l1.next;
        }
        else if (l2 != null) {
            current.next = {val: l2.val, next: null};
            l2 = l2.next;
        }
        
        current = current.next;
    }
    
    return tempHead.next;
};