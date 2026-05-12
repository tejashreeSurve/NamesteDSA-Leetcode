/*
46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 
*/
// time complexity O(n*n!) because we are generating n! permutations and each permutation takes O(n) time to create a copy of the path array
// space complexity O(n) for the path array and O(n!) for the result array, but we can ignore the space taken by the result array as it is required to store the output
var permute = function(nums) {
    let result = [];
    const backtracking = (path)=>{
        if(path.length === nums.length) result.push([...path]);
        for (let i=0;i<nums.length;i++){
            if(!path.includes(nums[i])){
            path.push(nums[i]);
            backtracking(path);
            path.pop();
            }
        }
    }
    backtracking([]);

    return result;
};