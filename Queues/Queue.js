const Node = require('./Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    if (value === undefined || value === null) {
      return 'Could not enqueue, value was not valid.';
    }

    const newNode = new Node(value);

    // if the queue is empty
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if there is at least one existing node in the queue, reference the new node in the current last nodes next property
      this.last.next = newNode;
      // assign the new node reference to the last property
      this.last = newNode;
    }
    // regardless of above insert conditionals, increment the length of the queue
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return "Can't dequeue, queue is already empty.";
    }

    if (this.length === 1) {
      // only one node in queue, set last to null
      this.last = null;
    }
    // first in queue becomes the node that the existing first node was pointing to in its next property
    this.first = this.first.next;
    this.length--;
  }
}

module.exports = Queue;
