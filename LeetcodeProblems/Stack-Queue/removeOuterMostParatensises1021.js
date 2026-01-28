/**
 * 
1021. Remove Outermost Parentheses

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 */


// time complexcity - O(n)
// space complexcity = O(n)
function removeOuterParentheses(s) {
    const stack = [];
    let result = "";
    for (let p of s) {
        if (p === "(") {
            stack.push(p);
            if (stack.length > 1) result += p;
        } else {
            if (stack.length > 1) result += p;
            stack.pop();
        }
    }

    return result;
}

// without stack
// time complexcity = O(n)
// space complexcity = O(1) , extra storing is O(n) for answer but alogorithm is not using extra space so O(1)
function withouStak(s) {
    let result = "";
    let c = 0;
    for (let p of s) {
        if (p === "(") {
            c++;
            if (c > 1) result += p;
        } else {
            if (c > 1) result += p;
            c--;
        }
    }

    return result;
}