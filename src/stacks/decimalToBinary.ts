import Stack from './stack-object';

export default function decimalToBinary(decNumber: number): string {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop()!.toString();
  }
  return binaryString;
}

export function baseConverter(decNumber: number, base: number): string {
  const remStack = new Stack();
  const digits = '012345689ABCDEFGHIJKLMNOPQRSTUVXWYZ';
  let number = decNumber;
  let rem;
  let binaryString = '';
  if (!(base >= 2 && base <= 36)) return '';
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()!];
  }
  return binaryString;
}
const string = 'aia';
let resultString = '';
for (let i = string.length - 1; i >= 0; i -= 1) {
  resultString += string[i];
}

if (string === resultString) console.log('palindromo');

console.log(decimalToBinary(233));
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 35));
console.log(baseConverter(100345, 16));
