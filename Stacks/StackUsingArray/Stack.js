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

  push(value) {
    // if value passed is valid, push onto the stack
    if (value !== undefined && value !== null) {
      this.data.push(value);
    } else {
      throw new Error(
        'Invalid value provided. Could not be added to the stack'
      );
    }
    // return the new length of the stack
    return this.data.length;
  }

  pop() {
    return this.data.pop();
  }
}

module.exports = Stack;
