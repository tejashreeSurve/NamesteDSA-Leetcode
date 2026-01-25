/*
Find Missing Alphabets to Make a Pangram
Problem Statement
You are given a sentence consisting of English letters and other characters.
Your task is to find all the alphabets that are missing from the sentence so that it becomes a pangram.

A pangram is a sentence that contains every letter from a to z at least once.

Rules & Constraints
The case of letters should be ignored.

Only characters from a to z are considered.
The output should contain only the missing alphabets.
The output must be in lowercase.
The output should be in alphabetical order.
If the sentence is already a pangram, return an empty string.

Sample Input & Output
Example 1

Input: "A quick brown fox jumps over the lazy dog" Output: ""
Example 2

Input: "The quick brown fox jumps" Output: "adglvyz"


*/

// Complexity
// Time: O(n)
// Space: O(1) (fixed size array of 26)

function missingAlphabate(str) {
    let s = str.toLowerCase();
    let ans = "";
    let arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++){
        let charCode = s[i].charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            arr[charCode - 97] = 1;
        }
    }

    for (let i = 0; i < 26; i++){
        if (arr[i] === 0) ans += String.fromCharCode(97 + i);
    }
    
    return ans;
}

missingAlphabate("The quick brown fox jumps");