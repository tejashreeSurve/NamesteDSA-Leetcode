/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = "2"
Output: ["a","b","c"]

*/

// time complexcity O(3^m * 4^n) where m is the number of digits that map to 3 letters (2, 3, 4, 5, 6, 8) and
//  n is the number of digits that map to 4 letters (7, 9) because for each digit we have to generate all combinations
// of the letters it maps to and we have m digits that map to 3 letters and n digits that map to 4 letters so we have 3
//  options for each of the m digits and 4 options for each of the n digits so we have 3^m * 4^n combinations in total


// space complexcity is O(m + n) because of the path array and the recursion stack, where m is the number of digits that 
// map to 3 letters and n is the number of digits that map to 4 letters because in the worst case we can have all digits 
// that map to 3 letters or all digits that map to 4 letters so we have m + n digits in total and we can have at most m + n 
// function calls in the stack at the same time and each function call will have a path array of size m + n so space
//  complexcity is O(m + n)

var letterCombinations = function (digits) {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    const result = [];
    
    const backtracking = (path, start) => {
        if (start === digits.length) {
            result.push(path.join(""));
            return;
        }

        const choice = map[digits[start]];

        for (let i = 0; i < choice.length; i++){
            path.push(choice[i]);
            backtracking(path, start + 1);
            path.pop();
        }
    }

    backtracking([], 0);

    return result;
}