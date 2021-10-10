/* eslint-disable no-param-reassign */
import { Compare, createNonSortedArray, defaultCompare } from '../utils';

export default function insertionSort(array: number[], compareFn = defaultCompare) {
  const { length } = array;
  let temp;

  for (let i = 1; i < length; i += 1) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = temp;
  }
}

const arr4 = createNonSortedArray(5);
console.log(arr4);
insertionSort(arr4);
console.log(arr4);
