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
    if (this.head == null) {
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

  insertAtbackMany(data) {
    data.forEach((element) => {
      this.insertAtback(element);
    });
    return this;
  }
}
const singleNodeList = new SinglyLinkedList();

// console.log(singleNodeList.insertAtback(1));
// console.log(singleNodeList.insertAtback(5));
singleNodeList.insertAtbackMany([5, 6, 7, 8, 9])
console.log(singleNodeList);


