import {
    Compare, createNonSortedArray, defaultCompare, swap
} from '../utils';

function selectionSort(array: number[], compareFn = defaultCompare) {
  const { length } = array;
  let indexMin = 0;

  for (let i = 0; i < length - 1; i += 1) {
    indexMin = i;
    for (let j = i; j < length; j += 1) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap<number>(array, i, indexMin);
    }
  }
}

const arr3 = createNonSortedArray(8);
console.log(arr3);
selectionSort(arr3);
console.log(arr3);
