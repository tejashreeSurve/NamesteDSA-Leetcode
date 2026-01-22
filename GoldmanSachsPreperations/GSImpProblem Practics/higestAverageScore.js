let arr = [["Tanvi", 90], ["Sayali", 50], ["Divya", 60], ["Sayali", 60], ["Tanvi", 100], ["Sayali", 70], ["Divya", 50]];

function higestAverageScore(arr) {
    
    const obj = arr.reduce((acc, curr) => {
        if (!acc[curr[0]]) {
            acc[curr[0]] = [curr[1]];
        } else {
            acc[curr[0]].push(curr[1]);
        }
        return acc;
    }, {});

    let averageMax = -Infinity;
    for (let key in obj) {
        let keyArr = obj[key];
        let total = keyArr.reduce((acc, curr) => acc += curr, 0) / keyArr.length;
        averageMax = Math.max(total, averageMax);
    }
    console.log(averageMax);
}

higestAverageScore(arr);