/**
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 
 */


// time complexcity = O(n * k)
function groupAnagrams(strs) {
    let  map = new Map();
    
    for(let s of strs){  // O(n) - here loop i going through each word or strs array
        let val = anagramString(s); // O(k) - here loop is going thorugh each character in the word
        if(map.has(val)){
            map.get(val).push(s);
        }else{
            map.set(val,[s]);
        }
    }
    console.log(map);
    return Array.from(map.values());
};

function anagramString(s){
    let arr = new Array(26).fill(0);
    for(let char of s){
        arr[char.charCodeAt(0)-97]++;
    }

    return arr.toString();
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const ans = groupAnagrams(arr);
console.log(ans);