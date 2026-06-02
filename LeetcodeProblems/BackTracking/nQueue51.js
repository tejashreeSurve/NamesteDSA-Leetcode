/**
51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 */


var solveNQueens = function (n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array(n).fill("."));
    const transformArray = (board) => {
        let newArray = [];
        for (let i = 0; i < board.length; i++){
            newArray.push(board[i].join(""));
        }
        return newArray;
    }

    let backtrack = (board, row, colSet,diagSet,  antiDiagSet) => {
        if (row === n) {
            result.push(transformArray(board));
        }

        for (let col = 0; col < n; col++){
            if (colSet.has(col) || diagSet.has(row - col) || antiDiagSet.has(row + col)) continue;

            board[row][col] = "Q";
            colSet.add(col);
            diagSet.add(row - col);
            antiDiagSet.add(row + col);
            backtrack(board, row + 1, colSet, diagSet, antiDiagSet);

            board[row][col] = ".";
            colSet.delete(col);
            diagSet.delete(row - col);
            antiDiagSet.delete(row + col);
        }
        
    }

    backtrack(board, 0, new Set(), new Set(), new Set());
    
    return result;
}

const a = solveNQueens(4)
console.log(a);