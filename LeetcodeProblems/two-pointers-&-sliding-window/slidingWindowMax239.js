/**
 * 
 * 

239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */


// brute force algo
// time complexcity = O(n * k) = O(n * n) = O(n2)
// space Complexcity = O(n) - Answer
var maxSlidingWindow = function(nums, k) {
    let i = 0;
    let j = k-1;
    let maxAns = [];
    while(j< nums.length){ // while loop running for n - k + 1 = O(n)
        let arr = nums.slice(i, j+1); // O(k)
        maxAns.push(Math.max(...arr)); // O(k) , so total = O(k)
        i++,j++;
    }

    return maxAns;
};


// time complexcity = O(n)
// space complexcity = O(n) for the queue
function betterWay(nums, k) {
    let i = 0;
    let j = 0;
    const queue = [];
    const result = [];
    while (j < nums.length) {
        while (queue.length && nums[j] > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(nums[j]);
        if (j >= k - 1) {
            result.push(queue[0]);
            nums[i] === queue[0] && queue.shift();
            i++;
        }
        j++;
    }
    return result;
}