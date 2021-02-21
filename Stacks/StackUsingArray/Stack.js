class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    const length = this.data.length;
    // if there are no items in the stack, return null
    if (length === 0) {
      return null;
    }
    // if there are items, return the last item on the stack
    return this.data[length - 1];
  }
}

module.exports = Stack;
