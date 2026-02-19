/**
 * 110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 * 
 */

function isBalanced(root) {
    let ans = true;
    let calcuated = (curr) => {
        if (!curr) return 0;
        let left = calcuated(curr.left);
        let right = calcuated(curr.right);
        if (Math.abs(left - right) > 1) {
            ans = false;
        }
        return 1 + Math.max(left, right);
    }
    calcuated(root);
    return ans;
}