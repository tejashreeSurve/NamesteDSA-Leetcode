/**
28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

//--------------------my solution-------------------------------


var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1;
    let i =0;
    let j = needle.length-1;
    while(j< haystack.length){
        if(haystack.slice(i, j+1) === needle) return i;
        i++;
        j++;
    }
    return -1;
};

// time Complexcity - O(n x m)
// space complexcity - O(1)
function str(h, s) {
    let hL = h.length;
    let sL = s.length;
    for (let i = 0; i <= hL - sL; i++){
        let j;
        for (j = 0; j < sL; j++){
            if (h[i + j] !== s[j]) break;
        }

        if (j === sL) return i;
    }

    return -1;
}