/**
 * 
 * 145. Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]

Output: [3,2,1]

Explanation:



Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,6,7,5,2,9,8,3,1]

Explanation:



Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]
 */


// using Iterator method using two stack
function postOrderIteratorUsing1Stack(root) {
    if(!root) return [];
    let s1 = [root];
    let s2 = [];
    let curr = null;
    while (s1.length) {
        curr = s1.pop();
        s2.push(curr.val);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    return s2.reverse();
}

// using Iterator method using one stack
function postOrderIteratorUsing2Stack(root) {
    if (!root) return [];
    let stack = [];
    let ans = [];
    let curr = root;
    let lastVisited = null;
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peekVal = stack[stack.length - 1];
        if (peekVal.right && peekVal.right !== lastVisited) {
            curr = peekVal.right;
        } else {
            ans.push(peekVal.val);
            lastVisited = stack.pop();
       
        }
    }

    return ans;
}

var postorderTraversal = function(root) {
    let ans=[];
    function traversal(curr){
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }
    traversal(root);
    return ans;
};

// ---------------------------------------practices------------------------------------
// post order - Left - right - root
function practicesPostOrder(root) {
    if (!root) return [];
    const ans = [];
    const traversal = (curr) => {
        if (!curr) return;
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);

    }

    traversal(root);
    return ans;
}