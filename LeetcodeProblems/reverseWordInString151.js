var reverseWords = function(s) {
    let a = s.split(" ").filter((i)=> !!(i));
    let i = 0, j = a.length -1;
    while(i<= j){
        [a[i], a[j]] = [a[j],a[i]];
        i++;
        j--;
    }
    return a.join(" ");
};