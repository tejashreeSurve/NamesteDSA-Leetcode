/**
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 * 
 */

function isSubtree(root, subRoot) {

    let rootHash = isSerialized(root);
    let subRootHash = isSerialized(subRoot);

    // instead of this kmp algo can be used
    return rootHash.includes(subRootHash);
}

const isSerialized = (curr) => {
    let hash = "";

    const calHash = (currNode) => {
        if (!currNode) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + currNode.val;

        calHash(currNode.left);
        calHash(currNode.right);
        
    }

    calHash(curr);

    return hash;
}