/**
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
 */


//------------------------my solution-----------------------------

// Time complexcity = O(n)
// Space Complexcity = O(n)
function isValid(s) {
    let stack = [];
    for (let char of s) {
       if(char === "(" || char === "{" || char === "[") stack.push(char);
        else{
            if(stack.length){
            let popValue = stack.pop();
            if((popValue === "(" && char !== ")" ) || (popValue === "{" && char !== "}" ) || (popValue=== "[" && char !== "]" )) return false;
            }else return false;
        }
    }

    return stack.length === 0;
}


function refactor(s) {
    let stack = [];
    const map = {
        '{': "}",
        '(': ")",
        "[": "]",
    }

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            if (!stack.length) return false;
            else {
                let popValue = stack.pop();
                if (char !== map[popValue]) return false;
            }
        }
    }

    return stack.length === 0;
}