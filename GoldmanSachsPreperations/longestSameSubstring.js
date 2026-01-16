
// complexcity =  O(n)
// I solved it by me own 
function longestSameSubstring(s) {
    let index = 0;
    let max = 0;
    let c = 0;
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[x] === s[i]) {
            c++;
        } else {
            index = max < c ? x : index;
            max = Math.max(max, c);
            x = i;
            c = 1;
        }
    }
    index = max < c ? x : index;
    max = Math.max(max, c);
    console.log(index);
    console.log(max);
}

longestSameSubstring("aaabbbb");


// chatgpt more easy way did some refactoring

function refactored(s) {
    let x = 0;
    let c = 0;
    let max = 0;
    let index = 0;
    for (let i = 0; i < s.length; i++){
        if (s[x] === s[i]) {
            c++;
        } else {
            if (max < c) {
                index = x;
                max = c
            }
            x = i;
            c = 1;
        }
    }

     if (max < c) {
                index = x;
                max = c
    }
    
    console.log(index);
    console.log(max);
}