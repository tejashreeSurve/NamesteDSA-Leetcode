
let missingNumber = (arr) => {
    let total = Math.floor(arr.length * (arr.length + 1) / 2);

    const arrTotal = arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)
    
    return total - arrTotal;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// binray search varient - O(log n)
// this method will work on sortedArry
function binaryVersion(arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);
        if (arr[mid] === mid) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }
    return s;
}

console.log(binaryVersion([0,2]));

