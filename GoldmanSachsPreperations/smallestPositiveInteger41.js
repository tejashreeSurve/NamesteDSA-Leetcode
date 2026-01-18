

// with Time complexcity - O(n), spaceCompexcity = O(n)
function smalllestInterger(arr) {
    let set = new Set(arr);
    let i = 1;

    while (true) {
        if (!set.has(i)) return i;
        i++;
    }
}

// console.log(smalllestInterger([1, 2, 0]));      // 3
// console.log(smalllestInterger([3, 4, -1, 1]));  // 2
// console.log(smalllestInterger([7, 8, 9, 11])); 

// with Time Complexcity- O(n) and spaceComplexcity = O(1) - which is mentioned in leetcode

function withoutSpace(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length; i++){
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] -1] !== arr[i]) {
            let correctIndex = arr[i] - 1;
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
        }
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== i + 1) return i + 1;
    }

    return n + 1;
}
console.log(withoutSpace([1, 2, 0]));      // 3
console.log(withoutSpace([3, 4, -1, 1]));  // 2
console.log(withoutSpace([7, 8, 9, 11])); 