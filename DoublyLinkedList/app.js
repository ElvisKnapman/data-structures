const DoublyLinkedList = require('./LinkedList');

const myList = new DoublyLinkedList(10);
myList.append(33);
console.log(myList.tail.prev);
