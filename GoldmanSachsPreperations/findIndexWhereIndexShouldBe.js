// Find the Index Where an Element Should Be Inserted (Binary Search)
// Problem Statement
// You are given a sorted array of distinct integers and a target value X.
// If X exists in the array, return its index.
// If it does not exist, return the index where it should be inserted to maintain sorted order.
// The solution must use Binary Search.

// Sample Input & Output
// Example 1

// Input: arr = [1, 3, 5, 6], X = 5 Output: 2
// Example 2

// Input: arr = [1, 3, 5, 6], X = 2 Output: 1
// Example 3

// Input: arr = [1, 3, 5, 6], X = 7 Output: 4
// Example 4

// Input: arr = [1, 3, 5, 6], X = 0 Output: 0

function findIndex(arr, x) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = Math.floor((e + s) / 2);
        if (arr[m] === x) {
            console.log(m)
            return m;
        } else if (arr[m] < x) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    console.log(s);
}

findIndex([1, 3, 5, 6], 5);
findIndex([1, 3, 5, 6], 2);
findIndex([1, 3, 5, 6], 7);
findIndex([1, 3, 5, 6], 0);