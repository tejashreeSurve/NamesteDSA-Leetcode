/**
104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 
 * 
 */

// top down approch
var maxDepth = function(root) {
    if(!root) return 0;
    let maxDepth = 0;
    function traversal(curr,depth){
        maxDepth = Math.max(maxDepth, depth);
        curr.left && traversal(curr.left,depth+1);
        curr.right && traversal(curr.right,depth+1);
    }
    traversal(root,1);
    return maxDepth;

};

// bottom up approch
var maxDepth = function(root) {
    if(!root) return 0;
    let  maxLeft = maxDepth(root.left);
    let  maxRight = maxDepth(root.right);

    return 1+ Math.max(maxLeft, maxRight);
};