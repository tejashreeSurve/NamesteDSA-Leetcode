
function moveZero(arr) {
    let p = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) {
            [arr[p], arr[i]] = [arr[i], arr[p]];
            p++;
        }
    }
    console.log(arr);
}


moveZero([0])