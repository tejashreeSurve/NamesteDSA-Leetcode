// Design Leaderboard
// Problem Statement
// Design a Leaderboard class that supports the following operations:

// addScore(playerId, score)
// Adds the given score to the total score of the player identified by playerId.
// If the player does not exist, add them to the leaderboard with the given score.

// top(K)
// Returns the sum of scores of the top K players with the highest total scores.

// reset(playerId)
// Resets the score of the given player to 0.
// It is guaranteed that the player exists before calling this operation.

// The leaderboard starts empty.

// Sample Input & Output
// Operations

// addScore(1, 73) addScore(2, 56) addScore(3, 39) addScore(4, 51) addScore(5, 4) top(3) reset(1) addScore(2, 51) top(3)
// Output

// 180 197
// Explanation

// First top(3) → scores are [73, 56, 51] → sum = 180

// After reset(1) and addScore(2, 51), scores become [107, 51, 39, 4]

// Second top(3) → sum = 197



class Leaderboard {

    constructor() {
        this.scores = new Map();
    }
   
    addScore(playerId, score) {
        this.scores.set(playerId, (this.scores.get(playerId)||0)+ score);
    }

    top(k) {
        const values = [...this.scores.values()].sort((a, b) => b - a);
        console.log(values);

        let total = 0;
        for (let i = 0; i<k; i++){
            total += values[i];
        }

        return total; 
    }

    reset(playerId) {
        this.scores.set(playerId,0);
    }
}

const lb = new Leaderboard();

lb.addScore(1, 73);
lb.addScore(2, 56);
lb.addScore(3, 39);
lb.addScore(4, 51);
lb.addScore(5, 4);

console.log(lb.top(3)); // 180

lb.reset(1);
lb.addScore(2, 51);

console.log(lb.top(3)); // 197

function Leaderboard2() {
    this.scores = new Map();

    this.addScore = function(playerId, score){
        this.scores.set(playerId, (this.scores.get(playerId)||0)+ score);
    }
    this.top = function (k) {
         const values = [...this.scores.values()].sort((a, b) => b - a);
        console.log(values);

        let total = 0;
        for (let i = 0; i<k; i++){
            total += values[i];
        }

        return total; 
    }

}

let l = new Leaderboard2();
l.addScore(1, 45);
l.addScore(2, 56);
l.addScore(3, 39);
l.addScore(4, 51);
l.addScore(5, 4);

const ans = l.top(2);
console.log(l.scores);
console.log(ans);