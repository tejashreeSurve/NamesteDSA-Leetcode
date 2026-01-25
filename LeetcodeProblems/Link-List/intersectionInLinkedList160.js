/*
160. Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

*/
// 1. Approch -
// take 1 node from linked-list A and check if it exist in Linked-list B through traverse.
// Time complexcity - O(m x n ) = O(n2);
// Space complexity -O(1)

// 2. Approch
// time complexcity - O(m+n)
// space complexcity - O(n)

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let currA = headA;
    while(currA){
        if(!set.has(currA)) set.add(currA);
        currA = currA.next;
    }

    let currB = headB;
    while(currB){
        if(set.has(currB)) return currB;
        currB = currB.next;
    }

    return null;
};

//3. Approch
// Time complexcity - O(m+n) = O(n);
// Space complexcity - O(1)

let getInterNode = (headA, headB)=>{
    if (!headA || !headB) return null;

    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }

    return currA;
}
