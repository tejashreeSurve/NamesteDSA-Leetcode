// Code 6 - Return start and end index of longest uniform substring

// "aabbbbbbaccccccc" -> [9,15]
// "abbbccda" -> [1, 3]
// "10000111" ->> [ 1, 4 ]
// "aabbbbCdAA" => [ 2, 5 ]

function startAndEndOfLongestUniform(s) {
    let arr = [];
    let char = s[0];
    let start  = 0;
    for (let i = 0; i < s.length; i++){
        if (char !== s[i]) { 
            arr.push([start, i - 1]);
            start = i;
            char = s[i];
        }
    }
    arr.push([start, s.length - 1]);

    let ans;
    let max = 0;
    for (let a of arr) {
        let count = a[1] - a[0] + 1;
        if (max < count) {
            max = count;
            ans = a;
        }
    }
    console.log(ans);
    
    
}

// "aabbbbbbaccccccc" -> [9,15] 
// "abbbccda" -> [1, 3]
// "10000111" ->> [ 1, 4 ]
// "aabbbbCdAA" => [ 2, 5 ]
startAndEndOfLongestUniform("aabbbbCdAA"); //[2,5]