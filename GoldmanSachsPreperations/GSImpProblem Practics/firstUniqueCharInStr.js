/*

387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

function uniqueChar(s) {
    let charCount = new Array(26).fill(0);
    for (let i of s){
        charCount[i.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++){
        if (charCount[s[i].charCodeAt(0) - 97] === 1) return i;
    }

    return -1;
}