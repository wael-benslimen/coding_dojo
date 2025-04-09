/**
 * create the node of the binary tree element
 * @param {*} data / data given by the user
 *
 */
class BSTNode {
  // create the object using the constructor
  constructor(data) {
    // assign the data to the attribute data of the node
    this.data = data;
    // set the left and right to null
    this.left = null;
    this.right = null;
  }
}
class binerySearchTree {
  /**
   * @param {*} / no params required
   * initieate the binery search tree with an empty root
   */
  constructor() {
    this.root = null;
  }

  /**
   * @returns {true | false}
   */
  isEmpty() {
    if (this.root == null) {
      return true;
    }
    return false;
    }
    
    /**
     * gives the smalest value in the tree
     * @returns {node}
     */
  min() {
    if (this.isEmpty()) {
      throw new Error("the tree is empty");
    }
    let runner = this.root;
      while (runner.left) {
        if (runner) {
            
        }
      runner = runner.left;
    }
    return runner;
  }
}

const newTree = new binerySearchTree();
newTree.root = new BSTNode(10);
newTree.root.left = new BSTNode(8);
newTree.root.left.left = new BSTNode(7);
newTree.root.right = new BSTNode(14);
console.log(newTree.min());
