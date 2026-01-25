// program to merge array of objects with same key and sum the score

const input = [
  { key: 'A', score: 10 },
  { key: 'B', score: 20 },
  { key: 'A', score: 30 },
  { key: 'C', score: 40 },
  { key: 'B', score: 50 },
];

// output:

/*
object = {
    A: 40,
    B: 70,
    C: 40,
}


*/

function mergeTheKey(objArr) {
    return objArr.reduce((acc, curr) => {
        const { key, score } = curr;
        acc[key] = (acc[key] || 0) + score;
        return acc;
    },{})
}
console.log(mergeTheKey(input)); // { A: 40, B: 70, C: 40 }