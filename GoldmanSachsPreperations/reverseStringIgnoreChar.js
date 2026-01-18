//  Reverse string without changing position of special char
// s = "ab#cd,e@f" output= fe#dc,b@a

function isLowerCaseLetter(ch) {
    const code = ch.charCodeAt(0);
    return code >= 97 && code <= 122;
}
function reverseStr(s) {
    const arr = s.split("");
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (isLowerCaseLetter(arr[i]) && isLowerCaseLetter(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (!isLowerCaseLetter(arr[j])) {
            j--;
            
        } else {
            i++;
        }
    }
    console.log(arr.join(""));
}

reverseStr("ab#cd,e@f");