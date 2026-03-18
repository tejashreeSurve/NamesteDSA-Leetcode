/**
 * 
199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:

Input: root = [1,2,3,null,5,null,4]

Output: [1,3,4]

Explanation:



Example 2:

Input: root = [1,2,3,4,null,null,null,5]

Output: [1,3,4,5]

Explanation:



Example 3:

Input: root = [1,null,3]

Output: [1,3]

Example 4:

Input: root = []

Output: []
 */


// actuall

// iterative 
var rightSideView = function(root) {
    if(!root) return [];
    let ans = [];
    let q = [root];
    while(q.length){
        let level = q.length;
        for(let i =0 ;i< level;i++){

            let curr = q.shift();
            i === 0 && ans.push(curr.val);

            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }

    return ans;
};

// receursive
var rightSideView = function(root) {
    if(!root) return [];
    let ans = [];
  
    const traversal=(curr, level)=>{
        if(!curr) return;
        if(ans[level] === undefined) ans.push(curr.val);

        curr.right && traversal(curr.right,level+1);
        curr.left && traversal(curr.left,level+1);
    }

    traversal(root, 0);

    return ans;
};


// i tried



var rightSideView = function(root) {
    if(!root) return [];
    let ans = [root.val]
    const traversal=(curr)=>{
        if(!curr) return;

        curr.right && ans.push(curr.right.val);
        curr.right && traversal(curr.right);
        curr.left && traversal(curr.left);
    }

    traversal(root);

    return ans;
};


