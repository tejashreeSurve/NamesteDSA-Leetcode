
// if we pass n = 100 then it will hang the screen since
// becuase each create number 2 branch and call function again with 2
// n x 2n x 4n x 8n x 16n = n x 2 power of x = 1
// time complexcity = O(2 power n) = exponitial time complexecity (V.V bad complexcity);
// so this can be solve using Dynamic Program 
// recursion apporch
var fib = function(n) {
    if(n <= 1) return n;

    return fib(n-1)+fib(n-2);
};


// iterative approch
function fibonaccia(n) {
    let result = 0;
    let a = 0;
    let b = 1;
    if (n <= 2) return a + b;
    let i = 2
    while (i < n) {
        result = a + b;
        a = b;
        b = result;
        i++;
    }
    return result;   
}

console.log(fibonaccia(3))