// Find the First Occurrence of a Number Using Binary Search
// Problem Statement
// You are given a sorted array of integers that may contain duplicate values and a target number X.
// Find the index of the first occurrence of X using Binary Search.
// If the element is not present, return -1.

// Sample Input & Output
// Example 1

// Input: arr = [1, 2, 2, 2, 3, 4, 5], X = 2 Output: 1
// Example 2

// Input: arr = [1, 1, 1, 1, 1], X = 1 Output: 0
// Example 3

// Input: arr = [1, 2, 3, 4, 5], X = 6 Output: -1


function firstOccurence(arr, x) {
    let s = 0;
    let e = arr.length - 1;
    let result = -1;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (arr[m] === x) {
            result = m;
            e = m - 1;
        } else if (arr[m] < x) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    console.log(result);
}

firstOccurence([1, 2, 2, 2, 3, 4, 5], 2);
firstOccurence([1, 1, 1, 1, 1], 1);
firstOccurence([1, 2, 3, 4, 5], 6);