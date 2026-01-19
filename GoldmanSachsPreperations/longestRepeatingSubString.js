// Longest Uniform Subsequence
// Problem Statement
// Given a string, find the starting index and length of the longest contiguous subsequence consisting of the same repeating character.
// If multiple subsequences have the same maximum length, return the first occurrence.

// Sample Input & Output
// Example 1

// Input: "aabbbcca" Output: index = 2, length = 3 // "bbb"
// Example 2

// Input: "aaabbhhhhhbcca" Output: index = 5, length = 5 // "hhhhh"

function longest(str) {
    let x = 0;
    let i = 0;
    let count = 0;
    let max = -Infinity;
    let resultIndex = -1;
    while (i < str.length) {
        if (str[i] === str[x]) {
            count++;
            i++;
        } else {
            if (count > max) {
                max = count;
                resultIndex = x;
            }  

            x = i;
            count = 1;
            i++;
        
        }
    };

      if (count > max) {
                max = count;
                resultIndex = x;
            }  

    console.log(resultIndex);
}

longest("aabbbcca")
// need to work on