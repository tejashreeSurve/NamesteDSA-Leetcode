/**
 * 
 * 
101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false
 */


// recursive way
var isSymmetric = function (root) {
    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        return left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left);
    }
    
    return isMirror(root.left, root.right);
}

// iterative way
var isSymmetric = function (root) {
    const queue = [root.left, root.right];
    while (queue.length) {
        q1 = queue.shift();
        q2 = queue.shift();

        if (!q1 && !q2) continue;
        if (!q1 || !q2) return false;
        if (q1.val !== q2.val) return false;

        queue.push(q1.left, q2.right);
        queue.push(q1.right, q2.left);
    }

    return true;
}