/**
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
 */

//-------------------------my solution=-------------------------------

// time complexcity = O(m+n)
// space complexcity = O(m+n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            curr.next = new ListNode(l2.val);
            l2 = l2.next;
        }
         curr = curr.next;
    }

    while(l1){
         curr.next = new ListNode(l1.val);
         curr =curr.next;
         l1 = l1.next;
    }

    while(l2){
        curr.next = new ListNode(l2.val);
          curr =curr.next;
         l2 = l2.next;
    }

    return dummy.next;
};

// ----------------------------space complexcity = O(1)-------------
// time complexcity = O(n+m)
// space complexcity = O(1);

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;

   while(l1 && l2){
     if(l1.val < l2.val){
        curr.next = l1;
        l1 = l1.next;
     }else{
        curr.next = l2;
        l2 = l2.next;
     }
     curr = curr.next;
   }

     while(l1){         
        curr.next = l1;
        curr = curr.next;
        l1 = l1.next;
    }

    while(l2){
        curr.next = l2;
        curr =curr.next;
        l2 = l2.next;
    }

    return dummy.next;
};