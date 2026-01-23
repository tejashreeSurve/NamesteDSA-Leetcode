

/* 560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/

// brute force algo
// time complexcity = O(n2); n square - worst
function subArray(arr,k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j];
            if (sum === k) {
                count++;
            }
        }
    }
    console.log(count);
}

subArray([1, 1, 1],2);
subArray([1, 2, 3], 3);

// need to add O(n);