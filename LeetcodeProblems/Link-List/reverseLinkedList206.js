// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/* Example 1:

Input: head = [1,2,3,4,5]
Output: [5, 4, 3, 2, 1]

Input: head = [1,2]
Output: [2,1]
*/

let reverseLinkedList = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}