/*
215. Kth Largest Element in an Array
Solved
Medium
Topics
premium lock icon
Companies
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */

// heap
// leetcode has built in priority Queue that why we have used it
// but for use we can create a min heap as priority queue using heap and used it
var findKthLargest = function(nums, k) {
    let  q = new MinPriorityQueue();

    for(let i = 0;i< nums.length;i++){ // n time complexcity
        q.enqueue(nums[i]); // log n 
        if(q.size() > k){
            q.dequeue(); // log n
        }
    }

    // time complexcity = n (log n + log n) = O(nlog n)

    return q.front();
};