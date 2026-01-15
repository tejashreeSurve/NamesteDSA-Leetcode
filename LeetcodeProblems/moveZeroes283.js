
// my solution
var moveZeroes = function(nums) {
    if(nums.length <= 1 ) return;

    let p = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== 0){
            [nums[p], nums[i]] = [nums[i], nums[p]];
            p++;
        }
    }
};