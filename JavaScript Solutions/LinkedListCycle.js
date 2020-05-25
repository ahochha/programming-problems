/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    var nodeMap = {};
    
    while (head != null && head.next != null) {
        if (nodeMap[head.val] != undefined && nodeMap[head.val].next == head.next) {
            return true;
        }
        
        nodeMap[head.val] = head;
        head = head.next;
    }
    
    return false;
};