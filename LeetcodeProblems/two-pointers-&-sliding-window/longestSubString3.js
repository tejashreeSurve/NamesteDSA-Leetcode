/**
 * 
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */



// time complexcity = O(n2),
// space compelxcity = O(n)
function twoPointerWay(s) {
    if(!s.length) return 0;

    let i = 0;
    let j = 1;
    let max = 1;

    const ifIncludes = (str, val) => str.includes(val);
    while (j < s.length) {
        if (!(ifIncludes(s.slice(i,j), s[j]))) {
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            i++;
        }
    }
    return max;
}

// time complexcity -O(n);
// space complexcity -O(1);

function longestSubString(s) {
    let set = new Set();
    let x = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++){
        while (set.has(s[i])) {
            set.delete(s[x]);
            x++;
        }
        set.add(s[i]);
        max = Math.max(max, set.size);
    }

    return max;
}