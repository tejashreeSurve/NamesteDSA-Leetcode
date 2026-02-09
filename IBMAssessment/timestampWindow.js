/*
Problem Statement: Maximum Requests in a Time Window

You are given a sorted array of integers timestamps, where each element represents the time (in seconds) at which a request was received by a server.

You are also given an integer window, representing a time window in seconds.

Your task is to determine the maximum number of requests that can be processed within any continuous time window of length window.

Input:
timestamps = [1, 2, 3, 4, 7, 8, 10]
window = 3

Output:
4
*/
// time complexcity = O(n)
// space complexcity =O(1)
function maxWindowRequest(timestamps, window) {
    let i = 0;
    let j = 0;
    let max = 0;

    while (j < timestamps.length) {
        let val = timestamps[j] - timestamps[i];
        if (val <= window) {
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            i++;
        }
    }

    return max;
}