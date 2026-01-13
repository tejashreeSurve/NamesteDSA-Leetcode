function countNumber(n) {
    if (n === 0) return 1; // handling corner cases
    let count = 0;
    n = Math.abs(n); // converting the negative number to positive
    while (n !== 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countNumber(-210));