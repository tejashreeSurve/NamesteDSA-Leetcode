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

// 2 pointer approch
var getIntersectionNode = function(headA, headB) {
    let l1 = 0;
    let l1Curr = headA;
    while (l1Curr) {
        l1++;
        l1Curr = l1Curr.next;
    }

    let l2 = 0;
    let l2Curr = headB;
    while (l2Curr) {
        l2++;
        l2Curr = l2Curr.next;
    }

    /// check if l1 list is longer or smaller

    // making l2 list as greater
    if (l1 > l2) {
        [headA, headB] = [headB, headA];
    }


    l1Curr = headA;
    l2Curr = headB;
    let change = Math.abs(l1 - l2);
    for (let i = 0; i < change; i++){
        l2Curr = l2Curr.next;
    }

    while (l1Curr !== l2Curr) {
        l1Curr = l1Curr.next;
        l2Curr = l2Curr.next;
    }

    return l1Curr;
}

// easy pisy
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


