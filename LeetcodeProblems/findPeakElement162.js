// Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

var findPeakElement = function (nums) {
    let s = 0;
    let e = nums.length -1;
    while(s<e){
        let mid = s + Math.floor((e-s)/2);
        if( nums[mid] < nums[mid+1]) s = mid+1;
        else e = mid;
    }
    return s;
};