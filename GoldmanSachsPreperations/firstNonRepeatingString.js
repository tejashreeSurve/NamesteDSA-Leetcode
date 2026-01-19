

// First Non-Repeating Character
// Problem Statement
// Given a string, find and return the first non-repeating character in the string.
// If no such character exists, return null.

// Sample Input & Output
// Example 1

// Input: "abaccd" Output: "b"
// Example 2

// Input: "aabbcc" Output: null
// Example 3

// Input: "a" Output: "a"
function firstString(s) {
    let arr = new Array(s.length).fill(0);

    for (let char of s){
        arr[char.charCodeAt(0) - 97]++;
    }

    for (let char of s){
        if (arr[char.charCodeAt(0) - 97] === 1) return char;
    }
    
    return null;
}

const str = "ababbc";

const ans = firstString(str);

console.log(ans);