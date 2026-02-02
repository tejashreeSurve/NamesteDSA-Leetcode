/**
61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 */

//------------------- my solution --------------------------

// time complexcity = O(n + k +k ) = O(n)
var rotateRight = function(head, k) {
    if(!head || !head.next|| k === 0) return head;
    let size = 0;
    let curr = head;
    while(curr){ // O(n)
        size++;
        curr = curr.next;
    }
    
    let rotateListBy = k % size;
    if(rotateListBy === 0) return head;
    let s= head;
    let f = head;
    let movePointer = 0;
    while(movePointer !== rotateListBy){ // O(k)
        f = f.next;
        movePointer++;
    }

    while(f && f.next){ // O(k)
        s = s.next;
        f = f.next;
    }

    let newHead = s.next;
    s.next = f.next;
    f.next = head;

    return newHead;

};