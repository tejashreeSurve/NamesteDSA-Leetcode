/*
102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
*/

// recursive method
function recursiveApproch(root) {
    if (!root) return [];
    let ans = [];
    function traversal(curr, level) {
        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }

    traversal(root, 0);
    return ans;
}

// iterative method
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let ans = [];
    
    while(queue.length){
        let levelSize = queue.length;
        let levelArray= [];
        for(let i = 0;i<levelSize;i++){
        let curr = queue.shift();
        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
        levelArray.push(curr.val);
        }
        ans.push(levelArray)
    }

    return ans;
};