/**
232. Implement Queue using Stacks

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
 */

//---------------Design Queue cannot be solve using single stack- Not possible--------------------
//-------------------------------------------My solution-----------------------------------------------/

var MyQueue = function() {
    this.stack1 = [];
    this.stack2= [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let l = this.stack1.length;
    let i = 1;
    while(i<l){
        let val = this.stack1.pop();
        this.stack2.push(val);
        i++;
    }
    let returnVal = this.stack1.pop();

    i = this.stack2.length;
    while(i>0){
        this.stack1.push(this.stack2.pop());
        i--;
    }

    return returnVal;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let l = this.stack1.length;
    let i =1;
    while(i<l){
        let val = this.stack1.pop();
        this.stack2.push(val);
        i++;
    }

    let returnVal = this.stack1[this.stack1.length - 1];
    i = this.stack2.length;
    while(i >0){
        this.stack1.push(this.stack2.pop());
        i--;
    }

    return returnVal;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length;
};

//------------------------------------------------Akshya Saini solution---------------------------------------/

var MyQueue = function() {
    this.stack1 =[];
    this.stack2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.stack2.length){
        while(this.stack1.length) this.stack2.push(this.stack1.pop());
    }

    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.stack2.length){
        while(this.stack1.length)  this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length -1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return ( !this.stack1.length & !this.stack2.length);
};