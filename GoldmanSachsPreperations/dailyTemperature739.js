
// brute force = complexcity = O(n2)

var dailyTemperatures = function (temperatures) {
    let answer = new Array(temperatures.length).fill(0);

    for(let i = temperatures.length -2 ;i>= 0;i--){
        let x = i+1;
        let count =0;
        while(x<temperatures.length){
            if(temperatures[i]< temperatures[x]){
                answer[i] = count + 1;
                break;
            }else{
                x++;
                count++;
            }
        }
    }
    
    return answer;
};

const ans = [30, 60, 90];
dailyTemperatures(ans);


// complexcity = O(n)
function optimizedTemperature(temperatures) {
        const answer = new Array(temperatures.length).fill(0);
    const stack = [];

    for(let i =0;i< temperatures.length;i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prev = stack.pop();
            answer[prev] = i - prev;
        }
        stack.push(i);
    }
 return answer;
}