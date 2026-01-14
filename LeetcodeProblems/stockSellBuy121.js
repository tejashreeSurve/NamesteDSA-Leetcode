


// Brute force algo where complexcity =  O(n2)
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            let p = prices[j] - prices[i];
            if (p > profit) {
                profit = p;
            }
        }
    }
    return profit;
};

const arr = [7,1,5,3,6,4];
// const max = maxProfit(arr);
// console.log(max)

// Complexcity = O(n)
const maxP = (prices) => {
    let minVal = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++){
        if (minVal > prices[i]) minVal = prices[i];
        maxProfit = Math.max(prices[i] - minVal, maxProfit);
    }
    return maxProfit;
}

const re = maxProfit(arr);
console.log(re)