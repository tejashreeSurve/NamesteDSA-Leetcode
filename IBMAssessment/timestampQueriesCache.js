/**
 * Problem Definition: Cache Queries with Exact Timestamp Match

You are given two inputs:An array cachedQueries, where each element is an array of three values:
[timestamp, modelId, predictionValue]

timestamp is a string in the format "HH:MM:SS"
modelId identifies the model
predictionValue is the stored prediction

An array queries, where each element is an array of two values:

[modelId, timestamp]

Task:

For each query:

Find the cached entry where both:
modelId matches
timestamp matches exactly
Return the corresponding predictionValue

It is guaranteed that:
For every query, there exists exactly one matching entry in cachedQueries


 * 
 */


const cachedQueries = [
  ["10:00:00", "A", 100],
  ["10:05:00", "A", 120],
  ["10:03:00", "B", 200]
]
const queries = [
["A", "10:05:00"],
  ["B", "10:03:00"]
]

function predictionValues(cachedQueries, queries) {
    let ans = [];
    const map = new Map();
    for (let i of cachedQueries) {
        if (map.has(i[1])) {
            map.get(i[1]).push({timestamp: i[0],value: i[2]})
        } else {
            map.set(i[1], [{ timestamp: i[0], value: i[2] }])
        }
    }

    for (let i of queries) {
        if (map.has(i[0])) {
            let val = map.get(i[0]);
            for (let j of val) {
                if (j.timestamp === i[1]) {
                    ans.push(j.value);
                }
            }
        }
    }

    return ans;
}