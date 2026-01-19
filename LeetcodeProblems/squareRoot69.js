


// Sqrt(x)

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function (x) {
    if(x< 2) return x;
    let s = 2;
    let e = Math.floor(x/2);
    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(m*m === x) return m
        else if(m*m < x){
            s = m+1;
        }else{
            e = m-1;
        }
    }
    return e;
};