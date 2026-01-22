// Find the target index in a rotated sorted array in O(log n) time.

// 33. Search in rotated Sorted array
// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 


// arr = [4,5,6,7,0,1,2]
function targetInRotatedSortedArray(arr, target) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (arr[m] === target) return m;
        if (arr[m] >= arr[s]) { // left is sorted
            if (target < arr[m] && target >= arr[s]) e = m - 1;
            else s = m + 1;
        } else { // right side is sorted
            if (target > arr[m] && target <= arr[e]) s = m + 1;
            else e = m - 1;
        }
    }
    return -1;
}


let arr = [7,0,1,2,3,4,5,6];
console.log(targetInRotatedSortedArray(arr, 1));