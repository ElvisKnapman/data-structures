const Node = require('./Node');

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    // if there isn't a valid value
    if (value === undefined || value === null) {
      throw new Error('Not a valid value. Was not pushed to the stack.');
    }

    const newNode = new Node(value);

    if (this.length === 0) {
      // if there's no nodes in the stack, point the top and bottom properties to the new node
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // reference current top node in the next property of new top node
      newNode.next = this.top;

      // change the top property to the new node
      this.top = newNode;
    }

    // increase size of stack
    this.length++;
    return this;
  }

  pop() {
    // if there are no nodes in the stack return null
    if (!this.top) {
      return null;
    }

    // if there is only one node in the stack, when it is popped, set the bottom property to null
    if (this.length === 1) {
      this.bottom = null;
    }

    // save reference to current top node to be able to return it
    const removedNode = this.top;

    // make the top node the next node the current top points to (so when the current top gets popped off, the node below becomes the top)
    this.top = this.top.next;

    this.length--;

    return removedNode;
  }
}

module.exports = Stack;
