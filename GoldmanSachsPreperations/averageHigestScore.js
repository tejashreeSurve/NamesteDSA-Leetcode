
// Given an array with name and score get the highest average score from the array
// 1. group the scors with name
// 2. remove the avarage
// 3. return the higest number

// 1.
const data = [
  ["Charles", 87],
  ["Bobby", 100],
  ["Charles", 54],
  ["Steve", 78]
]

// 2. "
const data1 = [["Bobby", 87],
["Charles", 100],
["Eric", 64],
    ["Charles", 22]];

const data2= [
  ["jerry",65],
  ["bob",91], 
  ["jerry",23],
  ["Eric",83]
]

const  data3=[ [ "Bobby", -64 ],
[ "Charles", -65 ],
[ "Charles", -66] ]


function average(arr) {
    let obj = arr.reduce((acc, curr) => {
        if (!acc[curr[0]]) {
            acc[curr[0]] = [curr[1]];
        } else {
            acc[curr[0]].push(curr[1]);
        }
        return acc;
    }, {})
    console.log(obj);
    
    let max = -Infinity;
    let name;
    for (let i in obj) {
        let objValue = obj[i];
        let total = Math.floor((objValue.reduce((acc, curr) => acc += curr, 0)) / objValue.length);
        console.log(total)
        if (total > max) {
            max = total;
            name = i;
        };
    }
    console.log(max);
    console.log(name);
}

average(data3);