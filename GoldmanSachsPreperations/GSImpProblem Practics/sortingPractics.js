


// time complexcity = O(n2)
function bubbleSort() {
    // Bubble sort 
    let arr = [5,3,4,7,1,2,5,2,0];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let isSwap = false;
        for (let j = 0; j < n - i + 1; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }
        if (isSwap === false) break;
    }
    console.log(arr);
}
// bubbleSort();

function selectionSort() {
    let arr = [5, 4, 3, 2, 1];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
            if (arr[min] > arr[j]) min = arr[j]
        }
        if (arr[min] !== arr[i]) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }

    }
    console.log(arr);
}

// selectionSort();

function insertionSort() {
    let arr = [5, 4, 3, 2, 1];
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let prev = i - 1;
        while (current < arr[prev] && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = current;
    }
    console.log(arr);
}
insertionSort();


