/**
 * 
 * 
 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.


 */


//---------------------------------------my solution - wrong------------------------------------/
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
    this.secondMin = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(val < this.min){
        this.secondMin = this.min;
        this.min = val
    }else if(val > this.min && this.secondMin > val){
        this.secondMin = val;
    }

    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let result = this.stack.pop();
    console.log(this.min);
    console.log(this.secondMin);
    if(result === this.min){
        this.min = this.secondMin;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

// ----------------------------------Akshya Saini-------------------------------------------

var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min;
   
    if(!this.stack.length) min = val;
    else {
        let lastItem = this.stack[this.stack.length -1][1];
        min = Math.min(val, lastItem);
    }

    this.stack.push([val,min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1][1];
};
