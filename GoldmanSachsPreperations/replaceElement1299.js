
//brute force algo
// complexcity = O(n2)
var replaceElements = function (arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (max < arr[j]) {
                max = arr[j];
            }
        }
        if (i < arr.length-1) { 
            arr[i] = max;
            max = 0;
        } else {
            arr[arr.length - 1] = -1;
        }

    }
    return arr;
};

const arr = [17,18,5,4,6,1];
const ans = replaceElements(arr);
console.log(ans);


// complexcity = O(n)
function minComplexcity(arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--){
        let curr = arr[i];
        arr[i] = max;
        max = Math.max(curr, max);
    }
    return arr;
}

const ans2 = minComplexcity(arr);
console.log(ans2);

