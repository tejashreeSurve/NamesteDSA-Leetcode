/*

Code 12 - Encode given string by replacing substrings with prefix same as itself with *

Given string str of size N containing only lowercase English letters. The task is to encrypt the string such that the substrings having same prefix as itself are replaced by a *. Generate the encrypted string.

Note: If the string can be encrypted in multiple ways, find the smallest encrypted string. 

Input: str = “ababcababcd”
Output: ab*c*d
Explanation: The substring “ababc” starting from 5th index (0 based indexing) can be replaced by a ‘*’. So the string becomes “ababcababcd” ->  “ababc*d”. Now the substring “ab” starting from 2nd index can again be replaced with a ‘*’. So the string becomes “ab*c*d”

Input: str = “zzzzzzz”
Output: z*z*z
Explanation: The string can be encrypted  in 2 ways: “z*z*z” and “z**zzz”. Out of  the two “z*z*z” is smaller in length.
*/


//[0,0,2,0,0,5,0,2,0,0,0]

function buildZArray(s) {
    const n = s.length;
    const z = new Array(n).fill(0);

    let l = 0, r = 0;

    for (let i = 1; i < n; i++) {
        if (i <= r) {
            z[i] = Math.min(r - i + 1, z[i - l]);
        }

        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i]++;
        }

        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }

    return z;
}

function encryptString(s) {
    const n = s.length;
    const z = buildZArray(s);

    let result = "";
    let i = 0;

    while (i < n) {
        // If substring starting at i matches prefix
        if (z[i] > 0) {
            result += "*";
            i += z[i]; // skip the matched substring
        } else {
            result += s[i];
            i++;
        }
    }

    return result;
}   