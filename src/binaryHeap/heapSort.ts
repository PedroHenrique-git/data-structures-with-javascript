/* eslint-disable max-len */
import { defaultCompare, ICompareFunction, swap } from '../utils';

function buildMaxHeap<T>(array: T[], compareFn: ICompareFunction<T> = defaultCompare) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    // heapify tem o mesmo código do método sifDown
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

// eslint-disable-next-line no-unused-vars
export default function heapSort<T>(array: T[], compareFn: ICompareFunction<T> = defaultCompare): T[] {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    // eslint-disable-next-line no-plusplus
    swap<T>(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}
