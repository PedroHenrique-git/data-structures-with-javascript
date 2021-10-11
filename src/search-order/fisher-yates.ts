import { createNonSortedArray, swap } from '../utils';

function shuffle(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap<number>(array, i, randomIndex);
  }
  return array;
}

const ar = createNonSortedArray(10);
console.log(shuffle(ar));
