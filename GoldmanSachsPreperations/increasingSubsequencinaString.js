
function sequence(s) {
    let result = "";
    let x = 0;
    let i = 1;
    while (i < s.length) {
        if (s[x] < s[i]) {
            result += s[x];
            i++;
            x++;
        } else {
            i++;
        }
    }

    result += s[i - 1];
    console.log(result);
}


sequence( "abhkdfm")