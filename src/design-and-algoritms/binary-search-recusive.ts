/* eslint-disable max-len */
import quickSort from '../search-order/quick-sort';
import { Compare, defaultCompare, DOES_NOT_EXIST } from '../utils';

export default function binarySearchRecursive(array: number[], value: number, low: number, high: number, compareFn = defaultCompare): number {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }
    return mid;
  }
  return DOES_NOT_EXIST;
}

export function binarySearch(array: number[], value: number, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
