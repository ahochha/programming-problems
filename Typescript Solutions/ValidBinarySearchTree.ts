class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor (x: number) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

function helper (node: TreeNode, lower: number, upper: number) {
    if (node == null) {
        return true;
    }

    let val: number = node.val;

    if (val <= lower || val >= upper) {
        return false;
    }

    if (!helper(node.right, val, upper)) {
        return false;
    }

    if (!helper(node.left, lower, val)) {
        return false;
    }

    return true;
}

function isValidBST(root: TreeNode) { 
    return helper(root, -Infinity, Infinity);
}