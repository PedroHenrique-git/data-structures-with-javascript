/* eslint-disable no-param-reassign */
import { Compare, createNonSortedArray, defaultCompare } from '../utils';

function merge(left: number[], right: number[], compareFn = defaultCompare) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i += 1] : right[j += 1]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(array: number[], compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }
  return array;
}

const arr5 = createNonSortedArray(5);
console.log(arr5);
console.log(mergeSort(arr5));
