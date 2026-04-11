
// Priority Queue using Sorting

// time complexcity is not efficient while enqueu - O(n log n)
class PriorityQueue{
    constructor() {
        this.pQueue = [];
    }

    enqueu(value, priority) {
        this.pQueue.push({ value, priority });
        this.pQueue.sort((a, b) => b.priority - a.priority);
    }

    dequeue() {
        return this.pQueue.shift();
    }

    isEmpty() {
        return !!this.pQueue.length;
    }
}

// const pQueue = new PriorityQueue();
// pQueue.enqueu('Fever', 3);
// pQueue.enqueu('headace', 1);
// pQueue.enqueu('accident', 5);

// console.log(pQueue.pQueue);
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());
// console.log(pQueue.pQueue);

// with heap - time complexcity for enqueue will be = O()

class MaxPriorityQueue{
    constructor() {
        this.heap = [];
    }

    enqueu(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent].priority < this.heap[i].priority) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else {
                break;
            }
        }
    }

    dequeue() {
        if (this.heap.length < 1) return null;
        let val = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return val;
    }

    heapifyDown() {
        let i = 0;
        let length = this.heap.length;
        while (true) {
            let left = (2 * i) + 1;
            let right = (2 * i) + 2;
            let minIndex = i;
            if (left < length && this.heap[left].priority > this.heap[minIndex].priority) {
                minIndex = left;
            }

            if (right < length && this.heap[right].priority > this.heap[minIndex].priority) {
                minIndex = right;
            }

            if (this.heap[i].priority < this.heap[minIndex].priority) {
                [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]];
                i = minIndex;
            } else {
                break;
            }
        }
    }
}


const maxPriority = new MaxPriorityQueue();
maxPriority.enqueu('fever', 1);
maxPriority.enqueu('headaces', 4);

console.log(maxPriority);
console.log(maxPriority.dequeue());
console.log(maxPriority);
