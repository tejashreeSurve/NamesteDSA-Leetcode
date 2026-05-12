/*
90. Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 
*/

// time complexcity - O(n * 2 power n) + O(n log n) for sorting
// but we can ignore the sorting time complexity (O(n log n)) as it is very small compared to O(n * 2 power n)
// space complexcity - O(n * 2 power n) not counting the space taken by the result array, but we can ignore the space taken by the result array as it is required to store the output
var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  const backtrack = (path, start) => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 0);
  return result;
};
