var removeDuplicates = function(nums) {
    let i = 0;
    let p = 0;
    let set = new Set();
    while(i<nums.length){
        if(!(set.has(nums[i]))){
            set.add(nums[i]);
                nums[p] = nums[i];
                p++
        }
        i++;
    }
    
    return p;
};

const arr1 = [1, 1, 2];
const arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr1);


// above problem is taking exta space - set
// we can solve it without that

function removeDuplicateEasy(arr) {
    let i = 0;
    let x = 0;
    while (i < arr.length) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
        i++;
    }
    console.log(arr);
    console.log(x+1)
    return x + 1;
}

removeDuplicateEasy(arr);