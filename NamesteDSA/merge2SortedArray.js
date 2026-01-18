

function merge(arr1, arr2) {
    const res = [];
    let i = 0;
    let j = 0;
   
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        while (i < arr1.length) {
            res.push(arr1[i]);
            i++;
        }
    } else if (j < arr2.length) {
        while (j < arr2.length) {
            res.push(arr2[j]);
            j++;
        }
    }

    console.log(res);
}

merge([1, 3, 5, 7], [2, 4, 8, 9]);