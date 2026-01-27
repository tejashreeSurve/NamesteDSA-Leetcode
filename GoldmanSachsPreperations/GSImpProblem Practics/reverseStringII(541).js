/**
 * 541. ReverseString II
 * 
 * 
 * 
 * 
 */

// time complexcity = O(n);
// space complexcity = O(n);
function reverseString(s,k) {
    let arr = s.split("");
    let n = s.length;

    if (n < k) reverse(arr, 0, n - 1);
    else if (n < 2 * k) reverse(arr, 0, k - 1);
    else {
        for (let i = 0; i < n; i += 2 * k) {
            reverse(arr, i, i + k - 1);
        }
    }
    
    return arr.join("");
}

function reverse(s, start, end) {
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
}

const ans = reverseString("abcd", 2);
console.log(ans);


function reverseStringRefactor(s, k) {
    let arr = s.split("");
    let n = s.length;
    for (let i = 0; i < n; i += 2 * k){
        let left = i;
        let right = Math.min(i + k - 1, n - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");
}