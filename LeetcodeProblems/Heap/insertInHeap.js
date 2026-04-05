// How to insert the value in heap

// heap
// rules of heap
// 1. Heap should be full binary tree , means whenever the new node is added it will add in the left and then right
// 2. and the parent value should be less then children value

// eg
//    1
//   /  \
//  5   20
// / \
//30 10

class MinHeap{
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    insert(val) {
        this.heap.push(val);
        const lastIndex = this.heap.length - 1;
        this.heapifyUp(lastIndex);
    }

    // val will be delete from top in heap 
    // so in min heap the smallest value will be delete and then need to perform heapify down
    delete() {
        if (this.heap.length < 1) return null;
        let min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();

        return min;
    }

    peek() {
        if (!this.heap.length) return null;
        return this.heap[0];
    }

    heapifyDown() {
        let i = 0;
        let length = this.heap.length;
        while (true) {
            let leftChildIndex = this.getLeftChildIndex(i);
            let rigthChildIndex = this.getRightChildIndex(i);
            let minIndex = i; 

            if (leftChildIndex < length && this.heap[minIndex] > this.heap[leftChildIndex]) {
                minIndex = leftChildIndex;
            }

            if (rigthChildIndex < length && this.heap[minIndex] > this.heap[rigthChildIndex]) {
                minIndex = rigthChildIndex;
            }


            if (minIndex !== i) {
                [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]];
                i = minIndex;
            } else {
                break;
            }
        }
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentOfI = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentOfI]) {
                [this.heap[i], this.heap[parentOfI]] = [this.heap[parentOfI], this.heap[i]];
                i = parentOfI;
            } else {
                break;
            }
        }
    }


}

let heap = new MinHeap();
console.log(heap);
heap.insert(3);
console.log(heap.heap);
heap.insert(5);
heap.insert(7);
heap.insert(8);
heap.insert(6);
heap.insert(10);
heap.insert(9);
heap.delete();
heap.delete();
console.log(heap);
console.log(heap.peek());