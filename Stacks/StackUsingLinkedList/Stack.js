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
    // if there is a valid value
    if (value === undefined || value === null) {
      throw new Error('Not a valid value. Was not pushed to the stack.');
    }

    const newNode = new Node(value);

    if (this.length === 0) {
      // if there's no nodes in the stack point the top and bottom properties to the new node
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
}

module.exports = Stack;
