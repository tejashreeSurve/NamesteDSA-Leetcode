/* Given an unsorted integer array, find the smallest missing positive integer.
 
Example:
Input:
nums = [3, 4, -1, 1]

*/

 // 0 1
function smallestPositiveInterger(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    for (let i = 0; i < n; i++){
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}

const ans = smallestPositiveInterger([1,2,3,4]);
console.log(ans);

 // 0 1 [1,2,4,5]
function smallestPositiveIntergerWith0(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++){
        while (arr[i] < n && arr[i] !== i) {
            let correctIndex = arr[i];
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    for (let i = 0; i < n; i++){
        if (arr[i] !== i) return i;
    }

    return n;
}

console.log(smallestPositiveIntergerWith0([0,1,2,3,4]))