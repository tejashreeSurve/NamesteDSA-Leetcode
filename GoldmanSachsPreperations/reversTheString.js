function reverseString(s) {
    let arr = s.split(" ").filter((item) => item !== "");
    
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (i === j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    
    return arr.join(" ");
} 

let s = "This is a      cat";
let s1 = "     This is a cat";
let s2 = "This is a cat";

reverseString(s);
// input: "This is a cat"
// output:"cat a is This"

// input: "     This is a cat"
// output:"cat a is This"

// input: "This is a      cat"
// output:"cat a is This"
