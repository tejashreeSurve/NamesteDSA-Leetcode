// Next Greater Element (Monotonic Stack)
// Problem Statement
// Given an array of integers, find the next greater element for each element in the array.
// The next greater element for an element x is the first element to the right of x that is greater than x.
// If no such element exists, return -1 for that position.
// The solution should use a monotonic stack.

// Sample Input & Output
// Example 1

// Input: [4, 5, 2, 25] Output: [5, 25, 25, -1]
// Example 2

// Input: [13, 7, 6, 12] Output: [-1, 12, 12, -1]
// Example 3

// Input: [2, 1, 2, 4, 3] Output: [4, 2, 4, -1, -1]


// Why Monotonic Stack works for Next Greater Element
// Key idea:

// Keep a stack of indices

// Stack maintains decreasing order of values

// When a bigger value comes → it is the next greater element for everything smaller in the stack


function correct(arr) {
   
    let n = arr.length;
    let stack = [];
    let stackN = stack.length;
    let result = new Array(n).fill(-1);
    for (let i = 0; i < n; i++){
        while(stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]){
            let index =stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    console.log(result);
}


correct([4, 5, 2, 25]);
correct([13, 7, 6, 12]);
correct([2, 1, 2, 4, 3]);













// ---------------------------wrong answer----------------------------------
// function nextGreater(arr) {
//     let i = 1;
//     let x = 0;
//     while (i < arr.length) {
//         if (arr[x] < arr[i]) {
//             arr[x] = arr[i];
//             x++;
//             i = x + 1;
//         } else {;
//             if (i === arr.length-1) {
//                 arr[x] = -1;
//                 x++;
//                 i = x + 1;
//             } else {
//                  i++;
//             }
//         }
//     }

//     arr[arr.length - 1] = -1;

//     console.log(arr);

// }
