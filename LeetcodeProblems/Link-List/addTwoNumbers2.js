/**

2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

// -------------------------------chatgpt----------------------

function addTwo(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;
        
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        carry = Math.floor(sum / 10);
    }

    return dummy.next;
}




//--------------This 1 tries which is wrong-------------------------------
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;

    let l1Curr = l1;
    let l2Curr = l2;
    let carry = 0;
    while(l1Curr && l2Curr){
        let val = l1Curr.val + l2Curr.val + carry;
        ans.val = val % 10;
        ans.next = new ListNode();
        ans = ans.next;
        carry = Math.floor(val / 10);
        l1Curr = l1Curr.next;
        l2Curr = l2Curr.next;
    }
    if(l1Curr){
        while(l1Curr){
            let val = l1Curr.val+ carry;
            ans.val = val% 10;
            ans.next = new ListNode();
            ans = ans.next;
            carry = Math.floor(val/10);
            l1Curr = l1Curr.next;
        }
    }

    if(l2Curr){
        while(l2Curr){
            let val = l2Curr.val+ carry;
            ans.val = val% 10;
            ans.next = new ListNode();
            ans = ans.next;
            carry = Math.floor(val/10);
            l2Curr = l2Curr.next;
        }
    }

    if(carry){
        ans.val = carry;
    }


    return ansHead;
    
};