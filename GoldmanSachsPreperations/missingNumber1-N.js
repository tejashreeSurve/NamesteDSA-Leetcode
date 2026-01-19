// Find the Missing Number (Binary Search)
// Problem Statement
// You are given a sorted array of distinct integers containing numbers from 1 to N, with exactly one number missing.
// Find and return the missing number using Binary Search.

// Sample Input & Output
// Example 1

// Input: [1, 2, 3, 4, 6, 7, 8] Output: 5
// Example 2

// Input: [2, 3, 4, 5, 6] Output: 1
// Example 3

// Input: [1, 2, 3, 4, 5] Output: 6





function missingNumber(arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (arr[m] === m + 1) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }

    return s + 1;
}

const arr = [1, 2, 3, 4, 5];
console.log(missingNumber(arr));