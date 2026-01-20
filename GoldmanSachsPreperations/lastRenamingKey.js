
// Last Remaining Key After Reduction
// Problem Statement
// You are given a collection of keys with positive integer values.
// In each round, reduce the value of every key by 1.
// If a key’s value becomes 0, it is removed in that round.

// The process continues until all keys are removed.
// Return the key that is removed last.

// If multiple keys are removed in the same final round, return any one of them.

// Sample Input & Output
// Example 1

// Input: { c: 1, b: 5, d: 2 } Output: "b"
// Explanation:

// Round 1 → c removed (0), b=4, d=1

// Round 2 → d removed (0), b=3

// Rounds 3–5 → b decreases to 0

// Last removed key → b


const obj = { c: 1, b: 5, d: 2 };
let lastRemove;

while (Object.keys(obj).length !== 0) {
    for (let key in obj) {
        obj[key]--;
        if (obj[key] === 0) {
            lastRemove = key;
            delete obj[key];
        }
        console.log(obj)
    }
}
console.log(lastRemove);
