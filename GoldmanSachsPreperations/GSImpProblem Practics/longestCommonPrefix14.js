/**
 * 
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

// time complexcity = O(s) if s is the sum of length of all string
// eg - we have 3 words in strs array  and length of each word is 6 then  6 + 6 + 6 = 18
// so s = 18 then complexcity is O(s) becuase we traves each char of word once

// space complexcity = O(1);
var longestCommonPrefix = function(strs) {
    let result = "";
    let firstCharLength = strs[0].length;
    
    let i =0;
    while(i<firstCharLength){
    let char = strs[0][i];
     for(let s of strs){
         if(i >= s.length ||char !== s[i]) return result;
    }
    result += char;
    i++;
    }

    return result;
};