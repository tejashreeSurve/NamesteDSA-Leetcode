// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

/* since this can be solve in 2 approches
 1. Convert Linked list to  array 
  - then find the middle
  - Time complexcity - O(n) (Traverse throught entire list)
  - Space complexcity - O(n) (n space for saving n number of element)
2. Slow fast pointer approches
 - Slow will move one ahead
 - fast will move 2 ahead
 - till fast reach to end node or null 
 - slow will point to middle


*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function (head) {
    // let slow = fast = head;
    let slow = head;
    let fast = head;
    // while(fast && fast.next)
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

 