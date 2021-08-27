import Stack from './Stack';
import StackObject from './stack-object';

const stack = new Stack<number>();
const stackObject = new StackObject();

console.log(stack.isEmpty());

// add items
stack.push(5, 8, 11, 15);

// is empty ?
console.log(stack.isEmpty());

// lenght
console.log(stack.size());

stack.pop();
stack.pop();

// peek
console.log(stack.peek());

console.log(stack.size());

// clear
stack.clear();

// lenght
console.log(stack.size());

// Object Stack

stackObject.push(4, 3, 2, 1);
console.log(stackObject.items);
console.log(stackObject.items[0]);
console.log(stackObject.size());
console.log(stackObject.isEmpty());
console.log(`item removido: ${stackObject.pop()}`);
console.log(stackObject.items);
console.log(stackObject.peek());
console.log(stackObject.toString());
console.log(Object.getOwnPropertyNames(stackObject));
console.log(Object.keys(stackObject));
