// Code 2 - Occurrence of string output - a4b3c2 --- aaaabbbcc(string)
// Give a string, return the character & count of each character till it's repeating

function charCount(s) {
    if (!s.length) return "";
    let result = "";
    let c = 0;
    let a = s[0];
    for (let char of s) {
        if (char === a) {
            c++;
        } else {
            result = result + a + c;
            a = char;
            c = 1;
        }
    }

    result = result + a + c;

    console.log(result);
}

charCount("aaabbbaa"); //a3b3a2

// if they want a5b3
// then we can create a object
// like obj:{a: 5, b: 3} -> using for loop change it to string 