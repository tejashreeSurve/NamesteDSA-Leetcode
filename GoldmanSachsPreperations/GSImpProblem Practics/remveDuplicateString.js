// Remove consecutive duplicate characters from a string (e.g., "aaabbcddd" → "abcd").
function removeDuplicate(str) {
    let ans = "";
    let x = 0;
    let i = 1;
    while (i < str.length) {
        if (str[x] !== str[i]) {
            ans += str[x];
            x = i;
        }
        i++;
    }

    ans += str[x];
    console.log(ans);
}

removeDuplicate("aaabbbcccd");