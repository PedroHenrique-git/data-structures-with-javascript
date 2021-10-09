import {
  Compare, createNonSortedArray, defaultCompare, swap
} from '../utils';

function partition(array: number[], left: number, right: number, compareFn = defaultCompare) {
  const pivot = array[(Math.floor((right + left) / 2))];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i += 1;
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j -= 1;
    }
    if (i <= j) {
      swap<number>(array, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quick(array: number[], left: number, right: number, compareFn = defaultCompare) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

function quickSort(array: number[], compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

const arr6 = createNonSortedArray(7);
console.log(arr6);
console.log(quickSort(arr6));
