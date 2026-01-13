var reverseOnlyLetters = function(s) {
    let i = 0;
    let j = s.length - 1;
    let arr = s.split("");
    while(i <= j){
        if(!(/^[A-Za-z]$/.test(arr[i]))){
            i++;
        }else if(!(/^[A-Za-z]$/.test(arr[j]))){
            j--;
        }else{
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }

    return arr.join("");
};

let str = "a-bC-dEf-ghIj";
const ans = reverseOnlyLetters(str);
console.log(ans);

// better way since regex is slower
// time complexcity - O(n)
// space complexcity - O(n) - since string are immutable and we cannot change sr
// so we have to convert it to array



var reverseOnlyLettersEasier = function(s) {
    let i = 0, j = s.length - 1;
    let arr = s.split("");

    const isLetter = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
    while(i <= j){
        if(!isLetter(arr[i])){
            i++;
        }else if(!isLetter(arr[j])){
            j--;
        }else{
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }

    return arr.join("");
};