
// binary search always search for sorted array
var search = function (nums, target) {
    let s = 0;
    let e = nums.length-1;
    while(s<= e){
        let mid = Math.floor((e+s)/2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target){
            e = mid -1;
        }else{
            s = mid +1;
        }
    }
    return -1;
};