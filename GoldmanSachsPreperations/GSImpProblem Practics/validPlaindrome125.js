/**
 * 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * 
 * 
 * 
 */

// Time complexcity = O(n)
// Space complexcity = O(1)

var isPalindrome = function(s) {
    let str = s.toLowerCase();
    let start = 0;
    let end = s.length-1;

    let isChar=(char)=> (char >= 97 && char <= 122) || (char >= 48 && char<=57);
    while(start<end){
        let charStart = str[start].charCodeAt(0);
        let charEnd = str[end].charCodeAt(0);
        if(!isChar(charStart)) start++;
        else if(!isChar(charEnd)) end--;
        else{
            if(str[start] !== str[end]) return false;
            start++;
            end--;
        }
    }

    return true;
};

var isPalindromeRefactored = function(s) {
    let str = s.toLowerCase();
    let start = 0;
    let end = s.length-1;

    let isChar=(char)=> char.match(/[a-z0-9]/i);
    while(start<end){
        if(!isChar(str[start])) start++;
        else if(!isChar(str[end])) end--;
        else{
            if(str[start] !== str[end]) return false;
            start++;
            end--;
        }
    }

    return true;
};