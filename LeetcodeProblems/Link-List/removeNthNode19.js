/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
*/


// Time complexcity - O(n)
// Space complexcity - O(1)
// this is 2 pass approch - where in 1 pass we calculate size and then in 2 pass we remove elemnt
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    let deletePos = size - n;
    curr = dummy;
    for(let i = 0;i <deletePos;i++){
        curr = curr.next;
    }
    curr.next = curr.next.next;
        
    return dummy.next;
};

// 1 pass, same complexcity as above just happen in single pass

let removeNode = function (head, n) {
    if (!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let c = 0
    let s = dummy;
    let f = dummy;
    while(c !== n){
        f = f.next;
        c++;
    }

    while(f.next){
        s = s.next;
        f= f.next;
    }

    s.next = s.next.next;
    return dummy.next;
}

