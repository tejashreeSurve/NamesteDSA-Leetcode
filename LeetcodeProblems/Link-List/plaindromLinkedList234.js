/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

we have 2  approches to solve
*/

// 1 Approch
// Time complexcity = O(2n) = O(n)
// Space complexcity = O(n)

let isPlaindrom = function (head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    let n = arr.length;
    for (let i = 0; i < n / 2; i++){
        if (arr[i] !== arr[n - i - 1]) return false;
    }

    return true;
}

// 2 approch
// find the mid using slow fast pointer
// rev the list from mid
// traves head to forwad and tail to forward

// time complexcity = O(n) -
// ----> find mid = O(n)
// -----> reverse = O(n)
// -----> check = O(n) = so O(n+n+n) = O(3n) = O(n)

// space complexcity = O(1)

let isPlaindromBetterApproch = function (head) {
    // find the mid

    let s = head;
    let f = head;
    while (f && f.next) {
        s = s.next;
        f = f.next.next;
    } 
    if (f) s = s.next;

 
    // reverse
    let prev = null;
    while (s) {
        let temp = s.next;
        s.next = prev;
        prev = s;
        s = temp;
    }

    // head = starting point & prev = ending point
    let tail = prev;
    // compare
    while (tail) {
        if (head.val !== tail.val) return false;
        head = head.next;
        tail = tail.next;
    }

    return true;

}
