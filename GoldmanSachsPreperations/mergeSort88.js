function mergeSort(arr1, m, arr2, n) {
    let i1 = m - 1;
    let i2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--){
        if (i2 < 0) break;
        if (i1>=0 && arr1[i1] > arr2[i2]) {
            arr1[i] = arr1[i1];
            i1--;
        } else {
            arr1[i] = arr2[i2] 
            i2--;
        }
    }

    console.log(arr1);
}


mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);