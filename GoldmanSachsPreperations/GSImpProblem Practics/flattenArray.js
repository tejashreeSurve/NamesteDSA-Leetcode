

// without using flat method

function withFlatFun() {
    const arr = [[1, [2, 3, 3], [3], [4, 6], [9]], [[2, 3, 4]]];
    console.log(arr.flat(Infinity));
}

const arr = [[1, [2, 3, 3], [3], [4, 6], [9]], [[2, 3, 4]]];

function flattenArray(arr,result=[]) {
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
           flattenArray(arr[i],result);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

const ans = flattenArray(arr);
console.log(ans);