const array = [12, 4, 6, 7, 8, 9, 8, 1000];

function searchElement(array,search) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === search) {
            return i;
        }
    }
    
    return -1;
}


console.log(searchElement(array, 49));


console.log(array.findIndex((item) => item === 4));

// my own findIndex function
Array.prototype.myFindFunction = function (func) {
    const arr = this;
    for (let a = 0; a < arr.length; a++){
        if (func(arr[a])) {
            return a;
        }
    }
    return -1;
}
console.log("hello", array.myFindFunction((item) => item === 78));



function findNumberOfNegativeArray(array) {
    let countNegative = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) countNegative++;

    }
    
    return countNegative;
}

const withNegative = [10,11, 13, 14, 19 , 30];

console.log(findNumberOfNegativeArray(withNegative));


function largetNumber(arr) {
    let largetNum = arr[0];
    
      for (let i = 1; i < arr.length; i++){
        if (arr[i] > largetNum) largetNum = arr[i];
    }
    return largetNum;
}

console.log(largetNumber(withNegative));
console.log(typeof -Infinity)


function smallestNumber(arr) {
    let smallestNum = arr[0];
    
      for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallestNum) smallestNum = arr[i];
    }
    return smallestNum;
}

console.log(smallestNumber(withNegative));


const arr = [10,30,20];
function secondLargetNumber(arr) {
    let first = arr[0];
    let secondLargest = first;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > first){
            secondLargest = first;
            first = arr[i];
            // handle duplicate array
        } else if(arr[i] > secondLargest && arr[i] < first && arr[i] !== first){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargetNumber(arr));


// double loop

for (let i = 5; i > 0; i--){
    for (let j = 0; j < i; j++){
        console.log(i, " ", j);
    }
}

