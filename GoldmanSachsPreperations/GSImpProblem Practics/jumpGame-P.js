/*
Jump Game (Reach the Last Index)
Problem Statement
You are given an array of non-negative integers where each element represents the maximum jump length from that index.
Starting at the first index, determine whether you can reach the last index of the array.

Return true if it is possible to reach the last index, otherwise return false.

Sample Input & Output
Example 1

Input: [3, 2, 1, 0, 4] Output: false
Example 2

Input: [3, 2, 1, 1, 8, 6] Output: true

*/

function jumpGame(arr) {
    let maxReach = 0;
    for (let i = 0; i < arr.length; i++){
        if (i > maxReach) return false; // we are stuck we cannot go further - [1, 0, 1]
        maxReach = Math.max(maxReach, arr[i] + i);
        if (maxReach >= arr.length - 1) return true; // when we  found the val before reach the last index it self
    }

    return true; // which mean we never stuck in loop mean we reach at end successfully
}