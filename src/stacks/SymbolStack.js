/* eslint-disable max-classes-per-file */
// eslint-disable-next-line no-underscore-dangle
const _items = Symbol('stackItems');

class Stack {
  constructor() {
    this[_items] = [];
  }

  push(...items) {
    this[_items].push(items);
  }

  print() {
    this[_items].forEach((item) => console.log(item));
  }
}

const stack = new Stack();
const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.push(1, 2, 3, 4, 5);
stack.print();

const items = new WeakMap();
class StackWithWeakMap {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}
