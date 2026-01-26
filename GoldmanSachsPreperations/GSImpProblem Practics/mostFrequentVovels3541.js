/**
 * 3541. Find Most Frequent Vowel and Consonant

You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.
 

Example 1:

Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
Example 2:

Input: s = "aeiaeia"

Output: 3

Explanation:

The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
There are no consonants in s. Hence, maximum consonant frequency = 0.
The output is 3 + 0 = 3
 
 */
// time Complexcity : O(n)
// Space Complexcity: O(1) (max 26 keys)
var maxFreqSum = function(s) {
    let map = new Map();
    let maxVovel = 0;
    let maxConso = 0;

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (let [key,value] of map) {
        if (key === "a" || key === "e" || key === "i" || key === "o" || key === "u") {
            maxVovel = Math.max(value, maxVovel);
        } else {
            maxConso = Math.max(value, maxConso);
        }
    }
    
    return maxConso + maxVovel;
};