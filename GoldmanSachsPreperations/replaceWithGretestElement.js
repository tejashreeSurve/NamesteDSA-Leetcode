// Replace each element with next greatest
// [5,10,6,8,6] → [10,-1,8,-1,-1]

function replaceWithGreatestElement(arr) {
    let result = new Array(arr.length).fill(-1);
    let stack = [];
    for (let i = 0; i < arr.length; i++){
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }

    console.log(result);
}

replaceWithGreatestElement([5, 10, 6, 8, 6]);