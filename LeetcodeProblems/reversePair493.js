

// Not work for the larger number of problem need merge sorting 
// complexcity = O(n2)
var reversePairs = function (nums) {
    let count = 0;
    for(let i = 0 ; i< nums.length ;i++){
        for(let j = i+1; j< nums.length; j++){
            let val = checkTheCondition(nums[i],nums[j])
            if (val) {
                console.log(i,j)
                count++;
            }
        }
    }

    return count;
};

function checkTheCondition(biggerVal, lessVal) {
    return biggerVal > (2 * lessVal);
}
const ans = reversePairs([2,4,3,5,1]);

console.log(ans);