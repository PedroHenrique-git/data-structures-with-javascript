/* eslint-disable no-extend-native */
// declaration

const daysOfWeek: number[] = new Array(7);
daysOfWeek.fill(0);

const daysOfWeekLiteral: string[] = [];

console.log(daysOfWeek, daysOfWeek.length);
console.log(daysOfWeekLiteral, daysOfWeekLiteral.length);

// example

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i += 1) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

// add elements

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// final position

numbers[numbers.length] = 10;
numbers.push(11, 12, 13);
console.log(numbers);

// start position

interface Array<T> {
    insertFirstPosition(value: T): void;
}

Array.prototype.insertFirstPosition = function (value: number) {
  for (let i = this.length; i >= 0; i -= 1) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(20);
numbers.unshift(-2, -4, -3);
console.log(numbers);
