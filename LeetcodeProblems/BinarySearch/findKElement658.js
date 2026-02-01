/**
658. Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 
Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3

Output: [1,2,3,4]

Example 2:

Input: arr = [1,1,2,3,4,5], k = 4, x = -1

Output: [1,1,2,3]
 */

//------------------------------------linear search ---------------------------------------
// time complexcity = O(n)
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        let distLeft = Math.abs(arr[left] - x);
        let distRight = Math.abs(arr[right] - x);

        if (distLeft > distRight) {
            left++;
        } else {
            right--;
        }
    }

    return arr.slice(left, left + k);
};

//----------------------------------------My Solution--------------------------------------
function findClosestElementBS(arr, k, x) {
     let l = arr.length;
    let s = 0;
    let e = l - 1;
    while(s< e){
        let m = s + Math.floor((e-s)/2);
        if((m+k < l && (arr[m+k] - x) >= (x-arr[m])) || (m+k >= l )){
            e = m;
        }else{
            s = m+1;
        }
    }

    return arr.slice(s, s + k);
}


//-------------------------------------------Nameste DSA solution---------------------------------------------

function findElement(arr, k, x) {
    let l = arr.length;
    let s = 0;
    let e = l - 1;
    while (s < e) {
        let m = s + Math.floor((e - s) / 2);
        if (Math.abs(arr[m + k] - x) < Math.abs(arr[m]-x)) s = m + 1;
        else e = m;
    }

    return arr.slice(s, s + k);
}

let arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4];
const ans = findElement(arr, 4, 3);
console.log(ans);