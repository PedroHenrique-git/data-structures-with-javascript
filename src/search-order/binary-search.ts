import {
    Compare, defaultCompare, DOES_NOT_EXIST, lesserOrEquals
} from '../utils';
import quickSort from './quick-sort';

function binarySearch(array: number[], value: number, compareFn = defaultCompare): number {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

console.log(binarySearch([5, 4, 3, 2, 1], 4));
