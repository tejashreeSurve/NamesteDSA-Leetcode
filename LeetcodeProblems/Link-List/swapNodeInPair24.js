/**
 * 
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:


Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]
 */

// work fine =============
// time compelxcity = O(n);
// space complexcity = O(1);

var swapPairs = function (head) {

    if (!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    let next = curr.next;

    while (curr && next) {
        prev.next = next;
        curr.next = next.next;
        next.next = curr;

        prev = curr;
        curr = prev.next;
        next = curr && curr.next;
    }

    return dummy.next;
}

///-------------------------i tries this but wrong -=================

var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let length = 0;
    let currS = head;
    while(currS){
        length++;
        currS = currS.next;
    }

    let newHead = head.next;
    let curr = head;
    while(curr && curr.next){
        let point = curr.next.next;
        curr.next.next = curr;
        curr.next = point;
        curr = point;
    }
    return newHead;
};