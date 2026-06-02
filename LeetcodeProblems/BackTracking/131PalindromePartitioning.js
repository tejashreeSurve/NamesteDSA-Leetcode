/*
131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]

*/
 

var partition = function(s) {
    const result = [];

    const isPlaindrome=(s)=>{
        let i = 0;
        let j = s.length-1;
        while(i< j){
            if(s[i++] !== s[j--]) return false;
        }
        return true;
    }

    const backtrack =(path, str)=>{
        if(!str.length){
            result.push([...path]);
        }
        for(let i = 1;i<=str.length;i++){
            let choice = str.slice(0,i);
            if(!isPlaindrome(choice)) continue;

            path.push(choice);
            backtrack(path, str.slice(i));
            path.pop();
        }
    }

    backtrack([], s);

    return result;
    
};