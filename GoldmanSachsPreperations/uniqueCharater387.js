
// my solution 
// complexcity = O(n)
var firstUniqChar = function (s) {
   let r = {};
    for (let i = 0; i < s.length; i++){
        if (!(s[i] in r)) {
            r[s[i]] = { val: 1, index: i };
        } else {
            r[s[i]].val++;
        }
    }

    const ans = Object.values(r).find((val) => val.val === 1);
    
    return ans ? ans.index : -1;

};

firstUniqChar("loveleetcode");


// chatgpt solution
//  a= 97, b = 98 , ...., z= 122    
function refactore(s) {
    const arr = new Array(26).fill(0);

    for (let i of s) {
        arr[i.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++){
        if (arr[s[i].charCodeAt(0) - 97] === 1) return i;
    }
  

    return -1;
}


console.log(refactore("leetcode"))