const Stack = require('./Stack');

const myStack = new Stack();

myStack.push(34);
console.log(myStack);
myStack.push(16);
console.log(myStack);
try {
  myStack.push(undefined);
} catch (err) {
  console.log(err.message);
}
console.log('the whole stack', myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log('the whole stack after the pop', myStack);
console.log(myStack.peek());
