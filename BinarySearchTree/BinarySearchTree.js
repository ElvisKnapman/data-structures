const Node = require('./Node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create a new node with the provided value
    const newNode = new Node(value);

    // if there is no root node, insert the new node at the root
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    // get the root node for iteration
    let current = this.root;

    // while there is a node
    while (current) {
      if (value === current.value) {
        return;

        // if the value is greater than the value in the current node
      } else if (value > current.value) {
        // if the right property of the current node is null, insert new node reference in that property
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // go right and set the current node to look at to that right node
        current = current.right;

        // if the value is less than the value in the current node
      } else if (value < current.value) {
        // if the left property of the current node is null, insert new node reference in that property
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // go left and set the current node to look at to that left node
        current = current.left;
      }
    }
  }
}

module.exports = BinarySearchTree;
