
// i/p = "()(())"
// o/p = true

// i/p = ")()("
// o/p = false

function parenthesis(s) {
    let c = 0;
    for (let char of s) {
        if (char === "(") {
            c++;
        } else {
            c--;
        }
        if (c < 0) return false;

    }

    return c === 0;
}

const ans = parenthesis(")()(");

console.log(ans);