

// Smallest Missing Positive Number
// Problem Statement
// Given an array of integers (which may contain negative numbers, zeros, and duplicates), find and return the smallest positive integer (> 0) that is not present in the array.

// Sample Input & Output
// Example 1

// Input: [1, 2, 0] Output: 3
// Example 2

// Input: [3, 4, -1, 1] Output: 2
// Example 3

// Input: [7, 8, 9, 11] Output: 1


// with Time complexcity - O(n), spaceCompexcity = O(n)
function smalllestInterger(arr) {
    let set = new Set(arr);
    let i = 1;

    while (true) {
        if (!set.has(i)) return i;
        i++;
    }
}

// console.log(smalllestInterger([1, 2, 0]));      // 3
// console.log(smalllestInterger([3, 4, -1, 1]));  // 2
// console.log(smalllestInterger([7, 8, 9, 11])); 

// with Time Complexcity- O(n) and spaceComplexcity = O(1) - which is mentioned in leetcode

function withoutSpace(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length; i++){
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] -1] !== arr[i]) {
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}
console.log(withoutSpace([1, 2, 0]));      // 3
console.log(withoutSpace([3, 4, -1, 1]));  // 2
console.log(withoutSpace([7, 8, 9, 11])); 