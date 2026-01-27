
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let l = this.queue.length;
    let i = 1;
    while (i < l) {
        let val = this.queue.shift();
        this.queue.push(val);
    }
    let returnVal = this.queue.shift();

    return returnVal;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let l = this.queue.length;
    let i = 1;
    while (i < l) {
        let val = this.queue.shift();
        this.queue.push(val);
    }
    let returnVal = this.queue.shift();
    this.queue.push(returnVal);
    return returnVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */