

// 707. Design Linked List



let Node = function (val) {
    this.val = val;
    this.next = null;
}

let MyLinkedList = function () {
    this.head = null;
    this.size = 0; 
}

// add new node in linked List

MyLinkedList.prototype.addNodeAtHead = function (val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addNodeAtTail = function (val) {
    const newNode = new Node(val);
    let node = this.head;

    // handle cornor case
    // suppose head is null then our node will become head
    if (node === null) {
        this.head = newNode;
    } else {
        // travel to the node which next is null
        while (node.next !== null) {
            node = node.next;
        }
        node.next = newNode;
    }
    this.size++;
}

MyLinkedList.prototype.addNodeAtIndex = function (index, val) {

    if (index < 0 || index > this.size) return;

    const newNode = new Node(val);
    let node = this.head;
   

    if (index === 0) {
        this.addNodeAtHead(val);
        return;
    } else if(index === this.size) {
        this.addNodeAtTail(val);
        return;
    }else {
        let i = 0;
        while (i !== index-1) {
            node = node.next;
            i++;
        }
        let nextAddress = node.next;
        node.next = newNode;
        newNode.next = nextAddress;
        this.size++;
    }
 
}

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let node = this.head;
    let i = 0;
    while (i !== index) {
        node = node.next;
        i++;
    }
    return node.val;
}

MyLinkedList.prototype.deleteIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    let node = this.head;
    
    // deleting first head
    if (index === 0) {
        this.head = node.next;
    } else {
        let i = 0;
        while (i !== index-1) {
            node = node.next;
            i++;
        }
    node.next = node.next.next;
    }
  
   this.size--;
}



// call this

let linkedList = new MyLinkedList();
linkedList.addNodeAtHead(1);
linkedList.addNodeAtTail(3);
linkedList.addNodeAtIndex(3, 2);

console.log(linkedList);
// const ans = linkedList.get(1);
// console.log(ans);
// linkedList.deleteIndex(1); // 1 3
// console.log(linkedList);
// const ans1 = linkedList.get(1);
// console.log(ans1); // 3 
// const ans3 = linkedList.get(3);
// console.log(ans3); // -1
// linkedList.deleteIndex(3); // nothing
// console.log(linkedList);
// linkedList.deleteIndex(0); 
// console.log(linkedList);
// linkedList.get(0);
// linkedList.deleteIndex(0);
// linkedList.get(0);
// console.log(linkedList);
