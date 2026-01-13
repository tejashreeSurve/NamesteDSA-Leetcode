//  whether number is plaindrome or not

// eg : 121, 1441, 1443441

function isPlaindrome(n) {
    const str = n.toString();
    let i = 0;
    let j = str.length-1;
    while (i <= j) {
        if (str[i] !== str[j]) {
            return "Number is not plaindrom";
        } else {
            i++;
            j--;
        }
        
    }

    return "Number is Plaindrom"
}

const n = -123;
console.log(isPlaindrome(n));


// with converting to string

function isPlaindromeWithConversion(n) {
    let reverseNumber = 0;
    let number = n;
    while (number > 0) {
        let mod = number % 10;
        reverseNumber = (reverseNumber *10) + mod;
        number = Math.floor(number/10);
    }
    return reverseNumber === n ? "Plaindrom" : "Not Plaindorm";
}

console.log(isPlaindromeWithConversion(-141));