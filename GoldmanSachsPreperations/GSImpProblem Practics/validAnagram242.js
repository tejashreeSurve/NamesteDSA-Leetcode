/**
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 
 * 
 * 
 */

// Has multiple approches

// 1---------------------------------------1 approch - my approch------------------------
// time complexcity = O(n) = O(n + m)
//          Loop through s → O(n)
//          Loop through t → O(m)
// space complexcity = O(1)
//          Initialize array of size 26 → O(1)
//          Loop through 26-length array → O(1)
var isAnagram1 = function(s, t) {
    let sCount = new Array(26).fill(0);
    for(let char of s){
        sCount[char.charCodeAt(0) - 97]++;
    }

    for(let char of t){
        sCount[char.charCodeAt(0) - 97]--;
    }

    for(let i of sCount){
        if(i !== 0) return false;
    }

    return true;
};


// ---------------------------------------2 approch ------------------------

// time compexcity =O(n log n); = O(n log n + m log m)
// space complexcity = O(n) = O(n log n)
var isAnagram2=function(s,t){
    return s.split("").sort().join("") === t.split("").sort().join("");
}


// ---------------------------------------3 approch------------------------

// time complexcity = O(n) = O(n + m)
//          Loop through s → O(n)
//          Loop through t → O(m)
// space complexcity = O(1)
//          Initialize array of size 26 → O(1)
//          Loop through 26-length array → O(1)
var isAnagram2=function(s,t){
    if(s.length !== t.length) return false;
    let map = new Map();

    for(let char of s){
        map.set(char, (map.get(char)||0)+1);
    }

    for(let char of t){
        if(!map.has(char)) return false;
        map.set(char, map.get(char)-1);
    }

    for(let [_,val ] of map){
        if(val !== 0) return false;
    }

    return true;

}