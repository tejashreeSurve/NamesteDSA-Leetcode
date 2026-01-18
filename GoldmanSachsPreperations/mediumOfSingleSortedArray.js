

function mediumOfSigleSorted(arr) {
    let n = arr.length;
    let isOdd = n % 2 !== 0;

    return isOdd ? arr[Math.floor(n / 2)] : (arr[n / 2] + arr[(n / 2) - 1]) / 2;
}

let oddArr = [1, 4, 6, 11, 12];
let evenArr = [1, 6, 12, 14, 20, 21];

const ans = mediumOfSigleSorted(evenArr);

console.log(ans);