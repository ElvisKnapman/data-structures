const Node = require('./Node');

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
    console.log(this);
  }

  append(value) {
    const newNode = new Node(value);

    // object currently reference by tail, update its next property to point to the new node, which will be the new tail
    this.tail.next = newNode;
    // change the tail to reference the newly created node
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    // point the next property of the new node to the node that is currently the head
    newNode.next = this.head;
    // head property will reference the newly created node object
    this.head = newNode;
    this.length++;
  }
}

module.exports = LinkedList;
