/**
 * Represents a single node in the linked list
 * Each node stores data and a reference to the next node
 */
class Node {
  /**
   * Creates a new Node instance
   * @param {*} data - The value to store in the node
   */
  constructor(data) {
    // The data/value stored in this node
    this.data = data;
    // Reference to the next node (initially null)
    this.next = null;
  }
}

/**
 * Represents a singly linked list data structure
 * Maintains a reference to the head (first) node
 */
class SinglyLinkedList {
  /**
   * Creates a new empty linked list
   */
  constructor() {
    // Reference to the first node in the list
    // Starts as null for an empty list
    this.head = null;
  }

  /**
   * Checks if the list is empty
   * @returns {boolean} True if list has no nodes, false otherwise
   */
  isEmpty() {
    // The list is empty when head points to nothing
    return this.head === null;
  }

  /**
   * Inserts a new node at the end of the list (iterative approach)
   * @param {*} data - The value to insert
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  insertAtBack(data) {
    // Create a new node with the given data
    const newNode = new Node(data);

    // If list is empty, new node becomes the head
    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    // Start at the head and traverse to the end
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    // Set the last node's next pointer to the new node
    current.next = newNode;
    return this;
  }

  /**
   * Inserts a new node at the end of the list (recursive approach)
   * @param {*} data - The value to insert
   * @param {Node} runner - Current node in recursion (defaults to head)
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  insertAtBackRecursive(data, runner = this.head) {
    const newNode = new Node(data);

    // Base case: empty list
    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    // Base case: reached last node
    if (runner.next === null) {
      runner.next = newNode;
      return this;
    }

    // Recursive case: move to next node
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Inserts multiple values at the end of the list
   * @param {Array} data - Array of values to insert
   * @returns {SinglyLinkedList} The list instance for method chaining
   * @throws {Error} If input is not an array
   */
  insertAtBackMany(data) {
    // Validate input is an array
    if (!Array.isArray(data)) {
      throw new Error("Input must be an array");
    }

    // Insert each array element
    data.forEach((element) => {
      this.insertAtBack(element);
    });

    return this;
  }

  /**
   * Converts the linked list to an array
   * @returns {Array|string} Array of values or "list is empty" message
   */
  toArray() {
    const arr = [];
    let current = this.head;

    // Traverse the list and collect data
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    // Return message if empty, otherwise the array
    return arr.length > 0 ? arr : "list is empty";
  }

  /**
   * Gets the number of nodes in the list
   * @returns {number} The length of the list
   */
  length() {
    let count = 0;
    let current = this.head;

    // Count each node while traversing
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  /**
   * Inserts a new node at the beginning of the list
   * @param {*} data - The value to insert
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  insertAtFront(data) {
    // Create new node that points to current head
    const newNode = new Node(data);
    newNode.next = this.head;

    // Update head to point to new node
    this.head = newNode;
    return this;
  }

  /**
   * Removes the first node from the list
   * @returns {SinglyLinkedList} The list instance for method chaining
   * @throws {Error} If list is empty
   */
  removeFront() {
    if (this.isEmpty()) {
      throw new Error("Cannot remove from an empty list");
    }

    // Move head to the next node (removes reference to old head)
    this.head = this.head.next;
    return this;
  }

  /**
   * Removes the last node from the list
   * @returns {SinglyLinkedList} The list instance for method chaining
   * @throws {Error} If list is empty
   */
  removeBack() {
    if (this.isEmpty()) {
      throw new Error("Cannot remove from an empty list");
    }

    // Special case: single node list
    if (this.head.next === null) {
      this.head = null;
      return this;
    }

    // Traverse to second-to-last node
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }

    // Remove reference to last node
    current.next = null;
    return this;
  }

  /**
   * Checks if the list contains a value
   * @param {*} val - The value to search for
   * @returns {boolean} True if found, false otherwise
   */
  contains(val) {
    let current = this.head;

    // Traverse the list looking for the value
    while (current) {
      if (current.data === val) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
  /**
   * delete the chosen value
   * @param {*} val - The value to delete
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  /**
   * Deletes the first occurrence of the specified value in the list
   * @param {*} val - The value to delete
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  removeValue(val) {
    // If list is empty, nothing to remove
    if (!this.head) {
      return this;
    }

    // Special case: value is in the head node
    if (this.head.data === val) {
      this.removeFront();
      return this;
    }

    let runner = this.head;

    // Traverse the list to find the node before the one to remove
    while (runner.next) {
      if (runner.next.data === val) {
        // Found the value - remove the node
        if (runner.next.next) {
          // Node to remove is in the middle
          runner.next = runner.next.next;
        } else {
          // Node to remove is the tail
          this.removeBack();
        }
        return this;
      }
      runner = runner.next;
    }

    // Value not found in the list
    return this;
  }

  /**
   * add the specified value before the first occurrence of the specified taget value in the list
   * @param {*} val - The value to add before
   * @param {*} targetval - The value to add
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  prepand(val, targetval) {
    // if list is empty we throw an error
    if (!this.head) {
      throw new Error("target value not found");
    }

    let runner = this.head;

    // Traverse the list to find the node before the one we ant to add the specified value before
    while (runner) {
      // found the target value - add the value specified before
      if (runner.next.data == targetval) {
        // add the runner.next to a temporary var to not loose it in the prosscess
        let temp = runner.next;
        // add the specified value before the target value
        runner.next = new Node(val);
        // change the taget value to the next of the added node to make it in its place
        runner.next.next = temp;
        // return this for chaning
        return this;
      }
      runner = runner.next;
    }

    // throw an error if the target value is not found
    if (!runner) {
      throw new Error("value not found");
    }
  }

  /**
   * Empties the list by removing all nodes
   * @returns {SinglyLinkedList} The list instance for method chaining
   */
  clear() {
    // Simply reset head to null
    this.head = null;
    return this;
  }
}
const singleNodeList = new SinglyLinkedList();

// Test recursive insert (note corrected method name)
console.log("Inserting 1 recursively:");
console.log(singleNodeList.insertAtBackRecursive(1).toArray()); // [1]

console.log("Inserting 5 recursively:");
console.log(singleNodeList.insertAtBackRecursive(5).toArray()); // [1, 5]

// Test inserting multiple values
console.log("Inserting multiple values [6,7,8,9]:");
singleNodeList.insertAtBackMany([6, 7, 8, 9]);
console.log(singleNodeList.toArray()); // [1, 5, 6, 7, 8, 9]

// Test insert at front
console.log("Inserting 5 at front:");
singleNodeList.insertAtFront(5);
console.log(singleNodeList.toArray()); // [5, 1, 5, 6, 7, 8, 9]

// Test length
console.log(`List length: ${singleNodeList.length()}`); // 7

// Test remove operations
console.log("Removing front:");
singleNodeList.removeFront();
console.log(singleNodeList.toArray()); // [1, 5, 6, 7, 8, 9]

console.log("Removing back:");
singleNodeList.removeBack();
console.log(singleNodeList.toArray()); // [1, 5, 6, 7, 8]

// Test contains
console.log("Contains check:");
console.log(`Contains 6? ${singleNodeList.contains(6)}`); // true
console.log(`Contains 70? ${singleNodeList.contains(70)}`); // false

// Test Remove value
console.log("removing the specified value");
singleNodeList.removeValue(6);
console.log("after remove value: ");
console.log(singleNodeList.toArray());

// test prepend value
console.log("prepandig the specified value");
singleNodeList.prepand(20, 7);
console.log("after adding value: ");
console.log(singleNodeList.toArray());

// Test clear
console.log("Clearing list:");
singleNodeList.clear();
console.log(singleNodeList.toArray()); // "list is empty"
console.log(`List length after clear: ${singleNodeList.length()}`); // 0

// Test error handling
try {
  console.log("Attempting to remove from empty list:");
  singleNodeList.removeFront(); // Should throw error
} catch (e) {
  console.log(`Error caught: ${e.message}`); // "Cannot remove from an empty list"
}

try {
  console.log("Attempting invalid insertMany:");
  singleNodeList.insertAtBackMany("not an array"); // Should throw error
} catch (e) {
  console.log(`Error caught: ${e.message}`); // "Input must be an array"
}

try {
  console.log("attempting invalid prepend");
  singleNodeList.prepand(1555, 155555);
} catch (e) {
  console.log(`error caught: ${e.message}`); // "target value not found"
}
