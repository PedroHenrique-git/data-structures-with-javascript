import Stack from './Stack';

const stack = new Stack();

console.log(stack.isEmpty());

// add items
stack.push(1, 2, 3, 4, 5, 6);

// is empty ?
console.log(stack.isEmpty());

// lenght
console.log(stack.size());

// clear
stack.clear();

// lenght
console.log(stack.size());
