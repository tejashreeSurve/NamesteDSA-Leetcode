


// my solution
var findMaxConsecutiveOnes = function (nums) {
        let count = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1) {
            count++;
        } else {
            result = Math.max(result,count);
            count = 0;
        }
    }
    return count !== 0 ?  Math.max(result,count): result;
};

const arr = [1,1,0,1,1,1];
findMaxConsecutiveOnes(arr);