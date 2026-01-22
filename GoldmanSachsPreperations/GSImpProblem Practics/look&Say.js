// Print the nth row of the look-and-say sequence (e.g., n=5 → "111221").

// exponteial time complexcity
function lookAndSay(n) {
    let start = "1";
    for (let i = 2; i <= n; i++){
        start = countDigitInStr(start);
    }
    console.log(start);
}
function countDigitInStr(str) {
    let ans = "";
    let digit = str[0];
    let p = 0;
    let count = 0;
    while (p < str.length) {
        if (digit === str[p]) {
            count++;
        } else {
            ans = ans + count + digit;
            digit = str[p];
            count = 1;
        }
        p++;
    }
    ans = ans + count + digit;
    return ans;
}

lookAndSay(4);
// 6 - 312211
// 7 - 13112221
// ...