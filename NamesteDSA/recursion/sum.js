function sum(n) {
    if (n === 1) return n
    
    return n + sum(--n)
}

const ans = sum(5);
console.log(ans);