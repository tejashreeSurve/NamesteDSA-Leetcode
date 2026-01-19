

var findLengthOfShortestSubarray = function (arr) {
    let count = 0;
    let max = 0;
    for(let i = arr.length -1;i>=0;i--){
        let curr = arr[i];
        let prev = i-1;
        while(arr[prev] > arr[curr] && prev >= 0 && arr[prev] !== arr[curr]){
            count++;
            prev--;
        }
        max = Math.max(count, max);
        count = 0;
    }
    return max;
};
 
const arr  = [1, 2, 3, 10, 4, 2, 3, 5];

const ans = findLengthOfShortestSubarray(arr);
console.log(ans);


//chatgpt anwer

// need to check
const findLengthOfShortestSubarray(arr){
    const n = arr.length;

    // find left sorted part
    let l = 0;
    while (l + 1 < n && arr[l] <= arr[l + 1]) l++;

    if (l === n - 1) return 0;

    // find right sorted part
    let r = n - 1;
    while (r > 0 && arr[r - 1] <= arr[r]) r--;

    let ans = Math.min(n - l - 1, r);

    // try to merge
    let i = 0, j = r;
    while (i <= l && j < n) {
        if (arr[i] <= arr[j]) {
            ans = Math.min(ans, j - i - 1);
            i++;
        } else {
            j++;
        }
    }

    return ans;
}