/**
 * 
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 */

//----------------------------my solution -------------------------------------
var searchRange = function(nums, target) {
    let startI = -1, endI = -1;

  // from start
    let s = 0, e = nums.length-1;
    while(s<=e){
        let m = s+ Math.floor((e-s)/2);
        if(target=== nums[m]){
            startI = m;
            e = m-1;
        }else if(target < nums[m]){
            e = m-1;
        }else{
            s = m+1; 
        }
    }

    // from end
    s = 0 , e= nums.length -1;
    while(s<=e){
        let m = s + Math.floor((e-s)/2);
        if(target=== nums[m]){
            endI = m;
            s = m+1;
        }else if(target < nums[m]){
            e = m-1;
        }else{
            s = m+1; 
        }
    }

  return [startI, endI];
};