
function reverStr(str) {
    let arr = str.split("");
    let i = 0, j = str.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    console.log(arr.join(""));
}

// reverStr("alrd"); // drla
// reverStr("adfgh"); // hgfda

function reverStrWithoutArray(str) {
    let ans = "";
    let i = str.length - 1;
    while (i >= 0) {
        ans += str[i];
        i--;
    }
    console.log(ans);
   
};

reverStrWithoutArray("alrd");
reverStrWithoutArray("adfgh");