//  Find second minimum element in array

function secondMin(arr) {
    let min = Infinity;
    let minSec = Infinity;

    for (let i = 0; i < arr.length; i++){
        let val = arr[i]
        if (val < min) {
            minSec = min;
            min = arr[i];
        } else if (min < val && minSec > val ) {
            minSec = val;
        }
    }

    console.log(min);
    console.log(minSec);

    return minSec === Infinity ? null : minSec;
}

secondMin([5, 3, 2, 1, 39, 44, -23, 55,-23])