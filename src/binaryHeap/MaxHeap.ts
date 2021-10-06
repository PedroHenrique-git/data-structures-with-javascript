import { defaultCompare, ICompareFunction } from '../utils';
import MinHeap from './MinHeap';

function reverseCompare<T>(compareFn: ICompareFunction<T>) {
  return (a: T, b: T) => compareFn(b, a);
}

export default class MaxHeap<T> extends MinHeap<T> {
  constructor(compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
