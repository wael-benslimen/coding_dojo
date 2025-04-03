class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  // check if the list is empty
  isEmpty() {
    if (this.head === null) {
      return true;
    }
  }
  // insert items at back
  insertAtback(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      return this;
    } else {
      let runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = node;
      return this;
    }
  }
  // insert at back recurcive
  insertAtBackRecurcive(data, runner = this.head) {
    let node = new Node(data);
    console.log(runner);
    if (this.isEmpty()) {
      this.head = node;
      return this;
    }
    if (runner.next == null) {
      runner.next = node;
      return this;
    }
    runner = runner.next;
    return this.insertAtBackRecurcive(data, runner);
  }
  // insert many items at back
  insertAtbackMany(data) {
    data.forEach((element) => {
      this.insertAtback(element);
    });
    return this;
  }
  // get all nodes in an array
  toArray() {
    const arr = [];
    if (this.isEmpty()) {
      return "list is empty";
    }
    let runner = this.head;
    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }
  // get the liked list length
  length() {
    if (this.isEmpty()) {
      return 0;
    }
    return this.toArray().length;
  }
  // insert at front
  insertAtFront(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this;
  }
  // remove from front
  removeFront() {
    this.head = this.head.next;
    return this;
  }
  // remove back
  removeBack() {
    let runner = this.head;
    while (runner.next.next) {
      runner = runner.next;
    }
    runner.next = null;
    return this;
  }
}
const singleNodeList = new SinglyLinkedList();
// console.log(singleNodeList.insertAtBackRecurcive(1));
// console.log(singleNodeList.insertAtBackRecurcive(5));

singleNodeList.insertAtbackMany([6, 7, 8, 9]);
singleNodeList.insertAtFront(5);
console.log(singleNodeList.toArray());
console.log(singleNodeList.length());
singleNodeList.removeFront();
singleNodeList.removeBack();
console.log(singleNodeList.toArray());

// console.log(singleNodeList);
