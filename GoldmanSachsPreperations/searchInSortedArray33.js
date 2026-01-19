
// Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 
 

function search(arr,target) {
    let s = 0;
    let e = arr.length - 1;
  
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (arr[m] === target) return m;
        if (arr[m] >= arr[s]) {
            if (target < arr[m] && target <= arr[s]) e = m - 1;
            else s = m + 1;
        } else {
            if (target > arr[m] && target <= arr[e]) s = m + 1;
            else e = m - 1;
        }
    }

    return -1;
}


const ans = search([1], 0);
console.log(ans);


// need to work on - it is wrong