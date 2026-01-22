
// Find the minimum number in a rotated sorted array in O(log n) time.  

function minInRotatedArray(arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (m > 0 && m < arr.length-1 && arr[m] < arr[m + 1] && arr[m] < arr[m - 1]) return arr[m];
        if (arr[m] >= arr[s] && arr[m] > arr[e])  s = m + 1;
        else e = m - 1;
    }

    return arr[s];
}

let arr = [0,1,2,3,4,5];
console.log(minInRotatedArray(arr));

