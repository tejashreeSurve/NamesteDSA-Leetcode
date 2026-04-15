/*
1046. Last Stone Weight
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

 
*/

// if we go with brute force algo then we have time complexcity will be 
// O(n2)

var lastStoneWeight = function(arr) {
    let heap = new MaxPriorityQueue();

    for(let i = 0;i<arr.length;i++){ // O(n)
        heap.enqueue(arr[i]); // O(log n)
    } // O(n log n)

    while (heap.size() > 1) { // O(n)
        // overall O(log n + log n + log n ) = O(3 log n)
        let x = heap.dequeue(); // O(log n)
        let y = heap.dequeue(); // O(log n)
        let diff = x-y;
        if(diff > 0){
            heap.enqueue(diff); // O(log n)
        }
    } // O(n log n )

    return heap.front() || 0;

};