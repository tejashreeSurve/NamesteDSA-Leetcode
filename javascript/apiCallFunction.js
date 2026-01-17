
/// create a function to make an api call. function will take id as arguments and call api - https://dummyjson.com/comments/1
// Implement a function to call the above api in each 5 sec , with incremental argument starting with 1
// Ex - 
// https://dummyjson.com/comments/1
// https://dummyjson.com/comments/2 - After 5 sec
// https://dummyjson.com/comments/3 - After 5 sec
// In above function, stop the function execution and don't run further in case any error encountered in Api


let currentId = 1;
let count = 0;

async function fetchData(id) {
    const response = await fetch("https://dummyjson.com/comments/" + id);

    if(!response.ok) throw new Error("Error code:" + response.status)
        
    
    return await response.json();
} 

// getData(1);

function startPolling() {
    let interval = setInterval(async () => {
        try {
            const data = await fetchData(currentId);
            count++;
            console.log(data);
            currentId++;
            console.log(count);
        } catch {
            clearInterval(interval);
        }
    }, 10)
    
}

startPolling();



// What will happen in above function if we change the interval value from  5sec to 10 ms.
// 1. if we change to 10 ms their will be lot of api call happeing quickly which will
// a. if network call might take longer time then 10ms to get the data.
// b. Race condition where comment 5 might arrive before comment 1
// c. sever will detect a DDos like pattern and might block your IP(429 to many api request)
// d. make you make screen hang