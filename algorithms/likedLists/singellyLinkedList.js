class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = new Node(2);
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
      console.log("in is empty ", this.isEmpty());
      this.head = node;
      console.log(this.head);
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
}
const singleNodeList = new SinglyLinkedList().insertAtback(1);
console.log(singleNodeList);
console.log(singleNodeList.insertAtback(5));
