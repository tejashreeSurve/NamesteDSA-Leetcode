/*

700. Search in a Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
*/

// I have solve this in one go

var searchBST = function(root, val) {
    let ans = null;
    
    const traversal =(curr)=>{
        if(!curr) return;

        if(curr.val < val){
            traversal(curr.right);
        }else if(curr.val > val){
            traversal(curr.left);
        }else if(curr.val === val){
            ans = curr;
        }
    }
    traversal(root);

    return ans;
};