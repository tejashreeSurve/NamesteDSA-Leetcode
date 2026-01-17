

// a = "eccbbbbdec"

function partition(s) {
    let re = {};
    let result = [];
    for (let i = 0; i < s.length; i++){
        re[s[i]] = i;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++){
        end = Math.max(end, re[s[i]]);
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }

    console.log(re);
    console.log(result);
}

const s = "ababcbacadefegdehijhklij";
partition(s);