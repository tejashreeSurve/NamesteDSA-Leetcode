/*
82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            let duplicateValue = curr.val;

            while (curr && curr.val === duplicateValue) {
                curr = curr.next;
            }
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next;

}