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

var addTwoNumbers = function(l1, l2) {
    var tempHead = { val: -1, next: null };
    var current = tempHead;
    var carry = 0;
    
    while(l1 || l2) {
        var x = (l1 != null) ? l1.val : 0;
        var y = (l2 != null) ? l2.val : 0;
        var val = x + y + carry;
        carry = Math.floor(val / 10);
        
        current.next = {val: val % 10, next: null};
        current = current.next;
        
        if (l1 != null) {
            l1 = l1.next;
        }
        
        if (l2 != null) {
           l2 = l2.next;         
        }
    }
    
    if (carry > 0) {
        current.next = {val: carry, next: null};
    }
    
    return tempHead.next;
};