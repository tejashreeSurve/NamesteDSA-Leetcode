/**
 * 

230. Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 */

// I solved it by my self
var kthSmallest = function(root, k) {
    let ans = null;
    let c = 0;
    const traversal =(curr)=>{
        if(!curr) return;
    
        traversal(curr.left);
        c++;

        if(c === k){
            ans = curr.val;
        }

        traversal(curr.right);
    }
    traversal(root);

    return ans;
};