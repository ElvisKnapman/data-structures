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
      return this;
    }

    // get the root node for iteration
    let currentNode = this.root;

    // while there is a node
    while (currentNode) {
      if (value === currentNode.value) {
        return;

        // if the value is greater than the value in the current node
      } else if (value > currentNode.value) {
        // if the right property of the current node is null, insert new node reference in that property
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        // go right and set the current node to look at to that right node
        currentNode = currentNode.right;

        // if the value is less than the value in the current node
      } else {
        // if the left property of the current node is null, insert new node reference in that property
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        // go left and set the current node to look at to that left node
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    // if BST is empty
    if (this.root === null) {
      return false;
    }

    // start at the root node
    let currentNode = this.root;

    // while there is a node
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }

      // if the value provided is greater than the current node value, look at the right property of the current node
      if (value > currentNode.value) {
        currentNode = currentNode.right;

        // same as above but to the left side
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
