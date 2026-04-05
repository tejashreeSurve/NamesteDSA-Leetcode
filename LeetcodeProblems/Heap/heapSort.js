let arr = [4, -1,-2, 8 ,10, 3, 5, 1, 78, 60];

function heapSort(arr) {
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--){
        heapifyDown(arr, i, n);
        console.log(arr);
    }

    // swap the first with the last value
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i);
    }
}

function heapifyDown(arr, i, n) {
    let minIndex = i;
    while (true) {
        let leftIndex = (2 * i) + 1;
        let rightIndex = (2 * i) + 2;
        if (leftIndex < n && arr[leftIndex] > arr[minIndex]) {
            minIndex = leftIndex;
        }

        if (rightIndex < n && arr[rightIndex] > arr[minIndex]) {
            minIndex = rightIndex;
        }

        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            i = minIndex;
        } else {
            break;
        }
    }
}

heapSort(arr);