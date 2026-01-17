

// break the problem in multiple step
// s = " -049abc"
// 1. ignore spaces
// 2. see sign
// 3. read digit
// 4. stop at character
// 5.

// 0 = 48 , 9 = 57
const str = "0-1"; // 0-1

function normalStr(str) {
    let i = 0;
    let n = str.length;
    let result = 0; 
    let sign = 1;

    while (i < n && str[i] === " ") i++;

    if (str[i] === '-' || str[i] === "+") {
        sign = str[i] === "-" ? -1 : 1;
        i++;
    }
    
    while (i < n && str[i] >= '0' && str[i] <= "9") {
        result = result * 10 + (str[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    result *= sign;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    console.log(result);

    return result;

}

normalStr(str);