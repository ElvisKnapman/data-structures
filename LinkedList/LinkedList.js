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

  insert(index, value) {
    // if provided index is out of range on upper boundary, append to end of list
    if (index >= this.length) {
      return this.append(value);
    }

    // if the index is 0, just call the prepend method
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    // get the node just before the index where the new node is to be inserted
    const leader = this.traverseToIndex(index - 1);

    // get the node that is currently being pointed to by the leader's next property
    const trailingNode = leader.next;

    // point the leaders next property to the new node being inserted
    leader.next = newNode;

    // point the new nodes next property to the node that the leader previously pointed to
    newNode.next = trailer;
  }

  traverseToIndex(index) {
    // variable to keep track of current node -- start at the head of the linked list
    let current = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        // if index is found, return the node
        return current;
      }
      // reference the next node in the list for the next loop iteration
      current = current.next;
    }
  }
}

module.exports = LinkedList;
