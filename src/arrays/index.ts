/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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
    reIndex(value: T[]): T[];
}

Array.prototype.insertFirstPosition = function (value: number) {
  for (let i = this.length; i >= 0; i -= 1) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

Array.prototype.reIndex = function (myArr) {
  const newArr = [];
  for (let i = 0; i < myArr.length; i += 1) {
    if (myArr[i] !== undefined) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
};

numbers.insertFirstPosition(20);
numbers.unshift(-2, -4, -3);
console.log(numbers);

for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i + 1];
}

const newNumbers: number[] = numbers.reIndex(numbers);
newNumbers.shift();
console.log('newNumbers:', newNumbers);

newNumbers.splice(0, 3);

console.log(newNumbers);

// matrizes

const matriz: any[][] = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log();
for (let i = 0; i < matriz.length; i += 1) {
  for (let j = 0; j < matriz[i].length; j += 1) {
    console.log(matriz[i][j]);
  }
  console.log();
}

console.table(matriz);

const matriz3x3x3: any[][][] = [];

for (let i = 0; i < 3; i += 1) {
  matriz3x3x3[i] = [];
  for (let j = 0; j < 3; j += 1) {
    matriz3x3x3[i][j] = [];
    for (let z = 0; z < 3; z += 1) {
      matriz3x3x3[i][j][z] = i + j + z;
    }
  }
}

let n = 0;
for (let i = 0; i < 3; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    for (let z = 0; z < 3; z += 1) {
      console.log(matriz3x3x3[i][j][z]);
      n += 1;
    }
  }
}

console.log(n);

// methods

const isEven = (x: number) => x % 2 === 0;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const everyResult = arr.every(isEven);
const someResult = arr.some(isEven);
const mapResult = arr.map((num) => `<li>${num}</li>`);

console.log(everyResult);
console.log(mapResult);
console.log(someResult);

arr.forEach((num) => console.log(num % 2 === 0));
const reducer = arr.reduce((acumulador, number) => acumulador + number, 0);
console.log(reducer);

// ordenation

const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reverse();
const compareFunction = (a: number, b: number) => a - b;
const ascOrder = order.sort(compareFunction);

const friends = [
  {
    name: 'Pedro',
    age: 20,
  },
  {
    name: 'Luiz',
    age: 23,
  },
  {
    name: 'Evandro',
    age: 10,
  },
];

const orderFriends = friends.sort((friendA, friendB) => friendA.age - friendB.age);

const names = ['Pedro', 'ana', 'John', 'Ramon'];

const orderNames = function (nameA: string, nameB: string): number {
  if (nameA.toLowerCase() < nameB.toLowerCase()) return -1;
  if (nameA.toLowerCase() > nameB.toLowerCase()) return 1;
  return 0;
};

console.log(names.sort(orderNames));
console.log(names.sort((a, b) => a.localeCompare(b)));
console.log(names.indexOf('Pedro'));

// find and findIndex

console.log(numbers.find((n1) => n1 % 13 === 0));
console.log(numbers.findIndex((n1) => n1 % 13 === 0));

// includes

console.log(numbers.includes(13));
console.log(numbers.includes(100));

console.log(numbers.toString());
console.log(numbers.join('--'));

// TypedArray

const int16 = new Int32Array(10);
int16.fill(1);
console.log(int16);
