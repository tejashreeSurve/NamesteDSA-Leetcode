
// ip = aaabbcddd , op =  abcd
function removeDuplicate(s) {
    if (s.length <= 1) return s;
    let r = '';
    let i = 0;
    let x = 0;

    while (i < s.length) {
        if (s[x] !== s[i]) {
            r = r + s[x];
            x = i;
        } 
            i++;

    }

    r = r + s[x];
    console.log(r);
}

// removeDuplicate("adgreeefs");

// without two pointer apporched

function refactor(s) {
    if (s.length <= 1) return s;
    let res = s[0];

    for (let i = 1; i < s.length; i++){
        if (s[i] !== s[i - 1]) res += s[i];
    }

    console.log(res);
}

refactor("aa");