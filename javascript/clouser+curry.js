
// 1
function add(a) {
    return function (b) {
        return a + b;
    }
}

const ans = add(30)(40);
console.log(ans);


// 2
// Node’s timers are approximate, not exact
//Your 2005ms timeout sometimes stops the interval before the 2nd print, sometimes after → 1 or 2 prints
// Event loop might busy in something else till then interval get clear before print
const interval = setInterval(()=>{

console.log("hello")

},1000);



setTimeout(()=>{

clearInterval(interval)

},2005);

function getAddition(n) {
    let count = n;

    return {
        get: function () {
            console.log(count++);
        }
    }
    
}

const addN = getAddition(10);
addN.get();
addN.get();
addN.get();
