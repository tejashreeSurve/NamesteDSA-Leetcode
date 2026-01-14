

// my solution
// complexcity = O(k) k = n , so O(n)
var reversePrefix = function (s, k) {
    if(k > s.length || k === 1) return s;
    let arr = s.split("");
    let i = 0, j = k-1;
    while(i<j){
        [arr[i], arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }
    return arr.join("");
};