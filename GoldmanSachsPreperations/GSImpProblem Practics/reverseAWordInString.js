// Reverse the words in a given string, ensuring extra spaces are handled correctly.

// Ip : "  hello world  "
// op : "world hello"


// Ip : "a good   example"
// op : "example good a"

// function reverseWordsInStr(str="") {
//     let arr = str.split(" ").filter((item) => item !== "");

//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }
//     console.log(arr.join(" "));
// }

// reverseWordsInStr("  hello world  ");
// reverseWordsInStr("a good   example");

function reverseStringPlusWords(str) {
    let arr = str.split(" ").filter((item) => item !== "");
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (i ===  j) {
            arr[i] = reverStr(arr[i]);
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        arr[i] = reverStr(arr[i]);
        arr[j] = reverStr(arr[j]);
        i++;
        j--;
    }

    console.log(arr.join(" "));
}
function reverStr(str) {
    let arr = str.split("");
    let i = 0, j = str.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join("");
}
reverseStringPlusWords("  hello world  "); // dlrow olleh
reverseStringPlusWords("a good   example"); // elpmaxe doog a