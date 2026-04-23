/*
378. Kth Smallest Element in a Sorted Matrix
Medium
Topics
premium lock icon
Companies
Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).

 

Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
Example 2:

Input: matrix = [[-5]], k = 1
Output: -5
*/

var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let minPQ = new MinPriorityQueue(x => x.val);
    // all the elements of first column into the minPQ
    for (let i = 0; i < n; i++){
        minPQ.push({val: matrix[i][0], row : i, col : 0})
    }

    // one by one find the min value in PQ and increase count till k
    for (let count = 0; count < k - 1; count++){
        // remove min value - as it is min priority queue the top element will be min value
        let { val, row, col } = minPQ.pop();
        // if element is pop then we have to increment the column index
        if (col+1 < n)
            minPQ.push({val: matrix[row][col+1], row: row, col: col+1 })
    }

    return minPQ.pop().val;

};