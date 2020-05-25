/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var BSTHelper = function(node, lower, upper) {
    if (node == null) {
        return true;
    }
    
    var val = node.val;
    
    if (val <= lower || val >= upper) {
        return false;
    }
    
    if (!BSTHelper(node.right, val, upper)) {
        return false;
    }
    
    if (!BSTHelper(node.left, lower, val)) {
        return false;
    }
    
    return true;
}

var isValidBST = function(root) {
    return BSTHelper(root, -Infinity, Infinity);
};