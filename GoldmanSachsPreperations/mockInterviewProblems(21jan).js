// problem 1

// for (let i = 0; i <= 3; i++){
//     setTimeout(() => console.log(i), 1000);
// }

// problem 2
let arr = [1, 2, [3, [8, 5, [6], 12]]];

function flatTheArray(arr) {
    const flatedArray = arr.flat(Infinity);

    return Math.max(...flatedArray);
}

// not recomended until and unless ask
let max = 0;
function resursionArray(arr) {
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            let val = resursionArray(arr[i]);
            max = Math.max(max, val);
        } else {
            max = Math.max(max, arr[i]);
        }
    }
    return max;
}
console.log(resursionArray(arr));


// problem 3

// Given a string s, find the length of the longest substring without repeating characters.
// Input:  "abcabcbb"
// Output: "abc"

// Input:  "bbbbb"
// Output: "b"

// Input:  "pwwkew"
// Output: "wke"

// ned to check this
function longestSubstring(str) {
    let max = 0;
    for (let char of str) {
        
    }
}
//----------------------Problem 4------------------------

const objName = [{ name: "abc", score: 20 }, { name: "pqr", score: 30 }, { name: "abc", score: 40 }, { name: "pqr", score: 50 }]
// output = [{name:"abc", score: 60},{name:"pqr", score: 80s}]

// typescript Interface
// type User = {
//   id: number;
//   email: string;
//   avatar: string;
// };
// how to make some properties in as optional
// use Partial utility for that

//--------------Problem 5------------------------
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 
// Example:
// Input:
// 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5

// --------------------Problem 6--------------------
// Given an unsorted integer array, find the smallest missing positive integer.
 
// Example:

// Input:

// nums = [3, 4, -1, 1]
 

// other questions
//1.

function smallestMissingPositiveNumber(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
            let correctIndex = arr[i] - 1;
            [arr[correctIndex], arr[i]] = [arr[i], arr[correctIndex]];
        }
    }
    for (let i = 0; i < n; i++){
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}

const ans = smallestMissingPositiveNumber([7, 11, 13, 14]);
console.log(ans);