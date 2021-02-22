const Stack = require('./Stack');

const myStack = new Stack();

console.log(myStack.push(34));
console.log(myStack.push(39));
console.log(myStack);
console.log('item popped', myStack.pop());
console.log('item popped', myStack.pop());
console.log('item popped', myStack.pop());
console.log(myStack);

console.log(myStack.peek());
