import {
    Compare, createNonSortedArray, defaultCompare, swap
} from '../utils';

function bubbleSort(array: number[], compareFn = defaultCompare) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (compareFn(array[i], array[j]) === Compare.BIGGER_THAN) {
        swap<number>(array, i, j);
      }
    }
  }
}

function modifiedBubbleSort(array: number[], compareFn = defaultCompare) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap<number>(array, j, j + 1);
      }
    }
  }
}

const arr1 = createNonSortedArray(5);
const arr2 = createNonSortedArray(7);
bubbleSort(arr1);
modifiedBubbleSort(arr2);
console.log(arr1);
console.log(arr2);
