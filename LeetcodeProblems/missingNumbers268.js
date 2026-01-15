
// my solution
var missingNumber = function (nums) {
    const total = Math.floor((nums.length * (nums.length + 1)) / 2);
    
    let count = 0;
    for(let i = 0 ;i<nums.length ; i++){
        count += nums[i];
    }
    
    return total - count;
};

const ans = missingNumber([1,2]);
console.log(ans);
