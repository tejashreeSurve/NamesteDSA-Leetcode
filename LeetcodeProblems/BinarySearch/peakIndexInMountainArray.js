/**
 *

852. Peak Index in a Mountain Array

You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.

 

Example 1:

Input: arr = [0,1,0]

Output: 1

Example 2:

Input: arr = [0,2,1,0]

Output: 1

Example 3:

Input: arr = [0,10,5,2]

Output: 1
 */

//--------------------------------------My solution--------------------------------
// time complexcity - O(n)
var peakIndexInMountainArray = function(arr) {
    let n = arr.length;
    let s = 0, e =  n -1;
    while(s<e){
        let m = s + Math.floor((e-s)/2);
        if(m-1>=0 && m+1<n && arr[m] > arr[m+1] && arr[m] > arr[m-1]){
            return m;
        }else if(m+1 < n && arr[m] < arr[m+1]){
            s=m+1;
        }else{
            e = m;
        }
    }

    return  -1;
};

function peakIndex(arr) {
    let s = 0, e = arr.length - 1;
    while (s < e) {
        let m = s + Math.floor((e - s) / 2);
        if (arr[m] < arr[m + 1]) {
            s = m + 1;
        } else {
            e = m;
        }
    }

    return s;
}