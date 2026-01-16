
// my solution - complexcity = O(n);
var singleNumber = function (nums) {
    let set = new Set();
    for(let i = 0 ;i< nums.length;i++){
        if(set.has(nums[i])){
            set.delete(nums[i]);
        }else{
            set.add(nums[i]);
        }
    }
    return [...set][0];
};


// without extra spaces - space complexcity = O(1)
// what is XOR
// a ^ 0 = a
// a ^ a = 0
// let arr= [3,4,5,3,4,5,1];
// 3 ^ 4 ^ 5 ^ 3 ^ 4 ^ 5 ^ 1 = 1
// 3 ^ 3 ^ 5 ^ 5 ^ 4 ^ 4 ^ 1 = 1
// 0 ^ 0 ^ 0 ^ 1 = 1

function refactor(nums) {
    let result = 0;
    for(let i of nums){
        result ^= i; // this is XOR 
    }
    return result;
}

