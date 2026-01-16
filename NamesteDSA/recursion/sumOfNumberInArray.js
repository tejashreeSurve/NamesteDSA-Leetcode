function sumOfArray(arr, n) {
    if (n === 0) return  arr[n] %2 !== 0 ? arr[0]: 0;

    return arr[n] %2 !== 0 ? arr[n] + sumOfArray(arr, n-1): sumOfArray(arr,n-1);
}


const ans = sumOfArray([2,5, 3, 2, 0, 1,10], 7-1);
console.log(ans);