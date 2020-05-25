/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    var previous = null;
    var next = null;
    var current = head;
    
    while(current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return head = previous;
};