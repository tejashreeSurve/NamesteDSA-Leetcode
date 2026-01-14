

// time complexcity = O(n)
// str is divide into by 2k in each block
// eg str.length(n) = 12 , so n/2(k) = 12/2x2 (as k = 2) = 3 block in str
// so n/2k x k (no of operation for reverse string) = n x k / 2 x k = n/2
// so O(n) ignore 1/2
var reverseStr = function (s, k) {
    let arr = s.split("");
    let len = s.length;
    for(let i = 0 ; i< len; i+=2*k){
        let left = i;
        let right = Math.min(i+k-1, len -1);
        while (left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return  arr.join("");
};


const ans = reverseStr("abcd",2);
console.log(ans);