import Deque from './Deque';

/* eslint-disable max-len */
function palindromeCheker(aString: string): boolean {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) return false;

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split('').join('');
  let isEqual = true;
  let firstChar; let
    lastChar;

  for (let i = 0; i < lowerString.length; i += 1) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) isEqual = false;
  }

  return isEqual;
}

console.log('a', palindromeCheker('a'));
console.log('aa', palindromeCheker('aa'));
console.log('kayak', palindromeCheker('kayak'));
console.log('level', palindromeCheker('level'));
console.log('a', palindromeCheker('a'));
