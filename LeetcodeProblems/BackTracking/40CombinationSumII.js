/**
 * 
40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 */

// time complexcity O( n ^ (target/min)) where min is the smallest number in the array
// becuase let we we have target = 200 and min = 2 then we can have 100 numbers in the combination (depth of the tree) and we have n options(array length) for each number so n^100
// so time complexcity is O( n ^ (target/min)) and
// space complexcity is O(target/min) because of the depth of the tree
// becuase target/min number of function will be called in the stack at the same time and each function call will have a path array of size target/min so space complexcity is O(target/min)
var combinationSum2 = function(arr, target) {
    const result = [];
    arr.sort((a,b)=> a - b);
    const backTracking = (reminingSum, path, start)=>{
        if(reminingSum === 0) result.push( [...path]);
        if(reminingSum <=0) return;
        for(let i = start;i<arr.length;i++){

            if(i > start && arr[i] === arr[i-1]) continue;
            path.push(arr[i]);
            backTracking(reminingSum - arr[i], path, i+1);
            path.pop();
        }
    }

    backTracking(target, [], 0);


    return result;
};