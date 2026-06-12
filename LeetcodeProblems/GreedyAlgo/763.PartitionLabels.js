/**
763. Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
 */


// My solution 
var partitionLabels = function(s) {
    let map = new Map();
    for(let i = 0;i< s.length;i++){
        if(map.has(s[i])){
            let val =  map.get(s[i]);
            val[1] = i;
            map.set(s[i],val);
        }else{
            map.set(s[i], [i,i]);
        }
    }
console.log(map);

    const p = Array.from(map.values());
    const arr = [p[0]];
    for(let i = 1;i< p.length;i++){
        if(arr[arr.length-1][1]>= p[i][0])
            arr[arr.length-1][1] = Math.max(p[i][1], arr[arr.length-1][1]);
        else
            arr.push(p[i]);
    }

    console.log(arr);
    for(let i =0;i< arr.length;i++){
        arr[i] = arr[i][1]-arr[i][0] +1;
    }
    return arr;
  
}

// previous solved solution

var partitionLabels = function (s) {
    let map = {};
    let ans = [];
    for (let i = 0; i < s.length; i++){
        map[s[i]] = i;
    }

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++){
        end = Math.max(end, map[s[i]]);
        if (end === i) {
            ans.push(end - start + 1);
            start = i + 1;
        }
    }
    return ans;
}