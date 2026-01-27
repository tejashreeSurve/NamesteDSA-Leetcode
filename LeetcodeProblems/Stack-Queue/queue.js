let queue = [];

queue.push(1); // queue= [1] // add the 
queue.push(2); // queue= [1,2]
queue.push(3); // queue = [1,2,3]

queue.shift(); // value = 1 // remove element from the start (which is basically follow FIFO)

// if we want to access the element from the first do this


let first = queue[0];

/**
 * So for Queue there are 3 operation
 * 1. push - which basically enqueue - push the element at the end
 * 2. shift - which is basically dequeue - remove element from first(and shift  all the other element)
 * 3. queue[0] - To access the first element from the queue
 * 
 * 
 * And never ever used the 
 * queue.pop() -> this invalid though JS will allowed you to do that but is incorret for Queue 
 * If we do this then interviwer will through you out
 */