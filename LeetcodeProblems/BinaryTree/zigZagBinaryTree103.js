/*
103. Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between). 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

// iterative method
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let ans = [];
    let level = 0;
    while(queue.length){
        let levelAns = [];
        let len = queue.length;
        for(let i = 0; i<len;i++){
            let curr = queue.shift();
          if(level %2){
            levelAns.unshift(curr.val);
          }else{
            levelAns.push(curr.val);
          }
          curr.left && queue.push(curr.left);
          curr.right && queue.push(curr.right);
        }
        level++;
        ans.push(levelAns);
    }

    return ans;
};

// recursive techniqueu

var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let ans =[];
    let recur =(curr,level)=>{
        if(!curr) return;
        if(ans.length === level){
            ans.push([]);
        }
        if(level % 2){
            ans[level].unshift(curr.val);
        }else{
            ans[level].push(curr.val);
        }

        recur(curr.left, level+1);
        recur(curr.right, level+1);
    }

    recur(root,0);
    return ans ;
};


//-------------------------practices---------------

// I tried by myself iterative way 

var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let q = [root];
    let ans = [];
    while(q.length){
        let qLength = q.length;
        let ansLength = ans.length;
        for(let i = 0;i<qLength;i++){
            let val = q.shift();
            val.left && q.push(val.left);
            val.right && q.push(val.right);

            if(!ans[ansLength]){
                ans.push([]);
            }

           if(ansLength % 2 === 0){
                ans[ansLength].push(val.val);
            }else{
                ans[ansLength].unshift(val.val);
            }
            
        }
    }

    return ans;
};

// recercive method

function zigZag(root) {
    if (!root) return [];

    let ans = [];
    const zigZagRec = (curr, level) => {
        if (!curr) return;

        if (ans.length === level) {
            ans.push([]);
        }

        if (level % 2) {
            ans[level].unshift(curr.val);
        } else {
            ans[level].push(curr.val);
        }

        zigZagRec(curr.left, level + 1);
        zigZagRec(curr.right, level + 1);
    }

    zigZagRec(root, 0);

    return ans;
}