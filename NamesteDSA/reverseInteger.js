
// if value is goes out side signed 32-bit integer range [-231, 231 - 1] then return 0
var reverse = function (x) {
    let n = Math.abs(x);
    let rev = 0; 

    while(n > 0){
        let last= n % 10;
        rev = (re * 10) + last;
        n = Math.floor(n /10);
    }
    const ans = x < 0 ? -rev : rev;

    if (ans < -(2 ** 31) || ans > ((2 ** 31) - 1)) return 0;
    return ans;
};

console.log(reverse(123));