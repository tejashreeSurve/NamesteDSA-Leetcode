/* 771. Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

// time complexcity = O(n * m) == O(n2)
var numJewelsInStones = function(jewels, stones) {
    let c = 0;
    for(let i = 0;i< stones.length;i++){
        let stone = stones[i];
        let j = 0;
        while(j < jewels.length){
            if(jewels[j] === stone) c++;
            j++;
        }
    }
    return c;
};

// time complexcity = O(n)
// Space compexcity = O(1) becuase the jewels has english characters only capital and small letter 
// which mean only O(52) = 26 + 26 which is result into O(1) even if u have length of jewels is 1000000 
function better(jewels, stones) {
    let set = new Set();
    let count = 0;
    for (let char of jewels) {
        set.add(char);
    }

    for (let char of stones) {
        if (set.has(char)) count++;
    }
    return count;

}