/**
 * 144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values. 

Example 1:

Input: root = [1,null,2,3]

Output: [1,2,3]

Explanation:



Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [1,2,4,5,6,7,3,8,9]

Explanation:



Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]
 * 
 */

function perOrderTravrsal(root) {
    let ans = [];
    function traversal(curr) {
        if (!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);

    return ans;
}

var preorderTraversalIterator = function (root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];
    while (stack.length){
        let curr = stack.pop();
        ans.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }

    return ans;
}