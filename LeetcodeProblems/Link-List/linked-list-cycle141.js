/*

141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

*/

// 1 aprroch - Using set
// Time Complexcity = O(n) - We are travesling to all the node
// Space Complexcity = O(n) - we are saving all the node in set in worst case O(n)
let hasCycle = function (head) {
    let set = new Set();
    let curr = head;
    while (curr) {
        if (set.has(curr.next)) return true;
        set.add(curr.next);
        curr = curr.next;
    }

    return false;
}

// 2 Approch - Floyd algorithms (slow fast pointer)
// Time complexcity = O(n) = trave the node slow = x and fast = 2x ( not loop)
// space complexcity = O(1)= not storing any items in the list

let hasCyclebetterArrapoch = function (head) {
    // Corner case = if head is null then not circular
    if (!head) return false;
    
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}