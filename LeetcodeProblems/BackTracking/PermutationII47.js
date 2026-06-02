/**
 * 

47. Permutations II

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 
 */

// time complexcity O(n! / (n1! * n2! * ... * nk!)) where n is the length of the array and n1, n2, ... nk are the
// frequencies of the duplicate numbers in the array because we are generating all unique permutations and we have
// to divide by the factorial of the frequencies of the duplicate numbers to avoid counting duplicate permutations
// space complexcity is O(n) because of the path array and the recursion stack, where n is the length of the input array
var permuteUnique = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  const backtracking = (path, choices) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) continue;
      path.push(choices[i]);
      backtracking(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  };

  backtracking([], nums);
  return result;
};
