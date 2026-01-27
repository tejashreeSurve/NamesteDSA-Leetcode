

let stack = [];
stack.push(1);
stack.push(2);
stack.push(7); // [1,2,7]

stack.pop()// value = 7 , stack = [1,2];
stack.pop() // value = 2, stack=[1];

stack[0] // if we do this then this is invalid operation for stack
// we should not so this in interview with stack