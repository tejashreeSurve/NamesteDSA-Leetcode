/**
 * 
 * 
540. Single Element in a Sorted Array
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 */

// -------------------------------------my solution------------------------------

var singleNonDuplicate = function(nums) {
    let l = nums.length 
    let s =0,e= l -1;
    while(s<=e){
        let m = s+ Math.floor((e-s)/2);
        if((m-1 >=0 && m+1 <l && nums[m] !== nums[m-1] && nums[m] !== nums[m+1]) || (m===0  && nums[m] !== nums[m+1]) || (m=== l-1 && nums[m] !== nums[m-1])) return nums[m];
        if(m+1 <l && nums[m] === nums[m+1]){
            if((e - (m+1)) % 2 === 0){
                e = m-1;
            }else{
                s = m+1;
            }
        }else{
            if((e - m)%2=== 0){
                e = m-2;
            }else{
                s = m+1;
            }
        }
    }

    return nums[s];
};


//------------------------------chatgpt answer----------------------------------
var singleNonDuplicate = function(nums) {
    let l = nums.length 
    let s =0,e= l -1;
    while(s<e){
        let m = s+ Math.floor((e-s)/2);
        // in normal pair 
        // 0 1 2 3 4 5...
        // a a b b c c....
        if(m % 2 === 1) m--;
        if(nums[m] === nums[m+1]){
            s = m + 2;
        }else {
            e = m
        }
    }

    return nums[s];
};