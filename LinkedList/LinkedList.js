const Node = require('./Node');

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
    console.log(this);
  }
}

module.exports = LinkedList;
