/**
 * 
567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */
function checkIfvalidString(sArray, window) {
    for (let i = 0; i < 26;i++) {
        if (sArray[i] !== window[i]) return false;
    }

    return true;
}

var checkInclusion = function (s1, s2) {
    let n1 = s1.length;
    let n2 = s2.length;

    if (n1 > n2) return false;
    let sArray = new Array(26).fill(0);
    let window = new Array(26).fill(0);

    for (let n of s1) {
        sArray[n.charCodeAt(0) - 97]++;
    }
    
    for (let i = 0; i < n1; i++){
        window[s2[i].charCodeAt(0) - 97]++;
    }

    if (checkIfvalidString(sArray, window)) return true;

    for (let i = n1; i < n2; i++){
        window[s2[i].charCodeAt(0) - 97]++;
        window[s2[i - n1].charCodeAt(0) - 97]--;
        
        if (checkIfvalidString(sArray, window)) return true;
    }

    return false;
}