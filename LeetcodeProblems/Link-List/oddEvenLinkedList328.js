/**
328. Odd Even Linked List
 
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
*/

// correct answer
// time complexcity = O(n)
// space complexcity = O(1)
function oddEven(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let evenHead = head.next;
    let even = head.next;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
}



//-------------------I try this it is incorrect solution but work in leetcode-------------------
var oddEvenList = function(head) {
    if(!head || !head.next) return null;
    let evenHead = head;
    let oddHead = null;
    let lastEvenValue = head;
    let lastOddValue= null;

    let curr = head.next;
    let index = 1;
    while(curr){
        if(index % 2 === 0){
            lastEvenValue.next = curr;
            lastEvenValue = curr;
        }else{
            if(oddHead) lastOddValue.next = curr;
            else oddHead = curr;
            lastOddValue = curr;
        }
        curr = curr.next;
        index++;
    }

    lastEvenValue.next = oddHead;
    if(lastOddValue) lastOddValue.next = null;

    return evenHead;
};