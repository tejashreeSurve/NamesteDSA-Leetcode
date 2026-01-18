
function mergeSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    let mid = Math.floor(n / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArrays(left, right);
}

function mergeArrays(a1, a2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            result.push(a1[i]);
            i++;
        } else {
            result.push(a2[j]);
            j++;
        }
    }

    return [...result, ...a1.slice(i), ...a2.slice(j)];
}