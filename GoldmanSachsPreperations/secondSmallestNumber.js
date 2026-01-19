

function secondSmallestNumber(arr) {
    if (arr.length < 2) return null;
    let firstMin = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < firstMin) {
            secondMin = firstMin;
            firstMin = arr[i];
        } else if( arr[i] > firstMin && arr[i] < secondMin) {
            secondMin = arr[i]
        }
    }

    return secondMin === Infinity ? null : secondMin;
    console.log(secondMin);
}


let arr =[1,1,1,3];

const ans = secondSmallestNumber(arr)
console.log(ans);