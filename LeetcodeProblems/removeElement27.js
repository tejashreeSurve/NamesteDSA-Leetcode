var removeElement = function(nums, val) {
    let x = 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== val) {
            if (x < i) {
                nums[x] = nums[i];
            }
            i++;
            x++;
        } else {
            i++;
        }
    }

    return x;
};
const arr = [0,1,2,2,3,0,4,2];

removeElement(arr, 2);


//better way

function removeElementBetterWay(arr, val) {
    let x = 0; 
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== val) {
            arr[x] = arr[i];
            x++;
        }
        i++;
    }
    return x;
}