

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

//  Time complexcity = O(n) Space complexcity= O(n)
var lengthOfLastWord = function (s) {
    let arr = s.split(" ").filter((item)=> item !== "");

    return arr[arr.length-1].length;
};


// my solution without any inbuilt function which is expected by interviwwer
function workSplit(s) {
    let i = s.length - 1;
    let count = 0;
    while (i >= 0) {
        if ((s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) || (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90)) {
            count++;
        } else {
            if (count) break;
        }
        i--;
    }
    return count;
}

const ans = workSplit("                  ");
console.log(ans);

// chatgpt answer
var lengthOfLastWordchatgpt = function (s) {
    let i = s.length - 1;
    let count = 0;

    // skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;

    // count last word
    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
    }

    return count;
};


