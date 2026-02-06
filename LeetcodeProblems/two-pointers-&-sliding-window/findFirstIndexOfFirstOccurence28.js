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

// KMP approch
// Remove LPS

// time complexcity = O(m+n) 
// space compelxcity = O(n) // n = needle length 
function lpsOfNeedle(needle) {
    let lps = [0];
    let n = needle.length;
    let i = 0;
    let j = 1;
    while (j < n) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            i++, j++;
        } else {
            if (i === 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1];
            }
        }
    }

    return lps;
}

function str(haystack , needle) {
    let lps = lpsOfNeedle(needle);

    let i = 0;
    let j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++, j++;
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }

        if (j === m) {
            return i - m;
        }
    }

    return -1;

}