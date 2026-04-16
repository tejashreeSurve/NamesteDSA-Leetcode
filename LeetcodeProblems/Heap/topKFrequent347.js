/*
347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]
*/

// brute force
// we can create map
//then in decending sort as per val
// then return k element

// without heap 
var topKFrequent = function(nums, k) {
    let map = {};
    for(let i = 0;i< nums.length;i++){ // O(n)
        if(!map[nums[i]]) map[nums[i]] = 0;
        ++map[nums[i]];
    }
    let arr = Object.entries(map); // O(n)

    arr.sort((a,b)=> b[1] - a[1]); // O(log n);
    let ans = [];
    
    for(let  i= 0;i< k;i++){ // O(k)
        ans.push(Number(arr[i][0]));
    }

    //Time complexcity = n + n + log n + k = O(n log n)

    return ans;
};


// where as heap has better time complexcity
var topKFrequent = function(nums, k) {
    let map = {};
    for(let i = 0;i< nums.length;i++){ // O(n)
        if(!map[nums[i]]) map[nums[i]] = 0;
        ++map[nums[i]];
    }

    let q = new MinPriorityQueue(x => x.freq);
    for(key in map){ // O(k)
        q.enqueue({val: key, freq: map[key]}); // O(log k )
        if(q.size() > k){
            q.dequeue(); // O(log k)
        }
    }

    // so O(n log k)


    return q.toArray().map((x)=> Number(x.val));
};