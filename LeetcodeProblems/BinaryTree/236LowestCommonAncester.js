/**
236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 * 
 */

// tried this
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let map= new Map();
    map.set(root.val, null);
    const cal =(curr, prevNode)=>{
        if(!curr) return;
        if(prevNode){
            map.set(curr.val,prevNode.val);
        }

        cal(curr.left, curr);
        cal(curr.right, curr);
    }

    cal(root, null);

    console.log(map);

};

//----------------dsa solution

function lowestCommonAncestor(root, p, q){
    let lca = null;

    const traversal = (curr) => {
        if (!curr) return 0;
        
        let c = 0;
        let ansLeft = traversal(curr.left);
        let ansRight = traversal(curr.right);

        if (curr.val === p.val || curr.val === q.val) {
            c++;
        }

        c = c + ansLeft + ansRight;
        if (c === 2 && !lca) {
            lca = curr;
        }

        return c;
    }

    traversal(root);

    return lca;
}