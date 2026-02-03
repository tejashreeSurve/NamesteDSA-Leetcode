/**
 * 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
 */

// brute force
// time complexcity- O(n2)
// space complexcity - O(1)
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        let j = i+1;
        let val = target - nums[i];
        while(j < nums.length){
            if(nums[j] === val) return [i,j];
            j++;
        }
        
    }
};

// time complexcity = O(n)
// space complexcity = O(n)
var twoSum = function(arr, target) {
    let map = new Map();
    for(let i = 0;i<arr.length;i++){
        map.set(arr[i], i);
    }

    for(let i = 0;i<arr.length;i++){
        let val = target - arr[i];
        if(map.has(val) && map.get(val)!== i) return [i, map.get(val)];
    }
};