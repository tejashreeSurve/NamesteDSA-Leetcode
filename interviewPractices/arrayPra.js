// const arr = ['apple', 'apple', 'banana', 'kiwi'];

// function arrayObj(arr) {
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     },{})
// }

// const ans = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});
// console.log(ans);

// if string is anagram
let s1 = "abded";
let s2 = "bdea";

function anagram(s1, s2) {
    let arr = new Array(26).fill(0);
    for (let s of s1) {
        arr[s.charCodeAt() - 97]++;
    }

    for (let s of s2) {
        arr[s.charCodeAt() - 97]--;
    }

    for (let a of arr) {
        if (a !== 0) return false;
    }

    return true;
}

console.log(anagram(s1, s2));

// bubble sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let isSwap = false;
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }
        if (!isSwap) break; 
    }

    return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i+1; j < n ; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !==  min ) [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
}

console.log(selectionSort([7, 1, 5, 4, 3, 2]));

function selectionSortForDuplicate(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i+1; j < n ; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !==  min && arr[i] !== arr[min]) [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
}
console.log(selectionSortForDuplicate([1, 1, 5, 4, 3, 2]));