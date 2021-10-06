/* eslint-disable class-methods-use-this */
import {
    Compare, defaultCompare, ICompareFunction, swap
} from '../utils';

export default class MinHeap<T> {
    protected compareFn: ICompareFunction<T>;

    protected heap: T[];

    constructor(compareFn: ICompareFunction<T> = defaultCompare) {
      this.compareFn = compareFn;
      this.heap = [];
    }

    getLeftIndex(index: number): number {
      return 2 * index + 1;
    }

    getRightIndex(index: number): number {
      return 2 * index + 2;
    }

    getParentIndex(index: number): number | undefined {
      if (index === 0) return undefined;
      return Math.floor((index - 1) / 2);
    }

    sifUp(index: number): void {
      let parent = this.getParentIndex(index);
      // eslint-disable-next-line max-len
      while (index > 0 && this.compareFn(this.heap[parent ?? 0], this.heap[index]) > Compare.BIGGER_THAN) {
        swap<T>(this.heap, parent ?? 0, index);
        // eslint-disable-next-line no-param-reassign
        index = parent ?? 0;
        parent = this.getParentIndex(index);
      }
    }

    extract(): T | undefined {
      if (this.isEmpty()) return undefined;
      if (this.size() === 1) return this.heap.shift();
      const removedValue = this.heap.shift();
      this.sifDown(0);
      return removedValue;
    }

    sifDown(index:number): void {
      let element = index;
      const left = this.getLeftIndex(index);
      const right = this.getRightIndex(index);
      const size = this.size();
      // eslint-disable-next-line max-len
      if (left < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
        element = right;
      }
      if (index !== element) {
        swap<T>(this.heap, index, element);
        this.sifDown(element);
      }
    }

    insert(value: T): boolean {
      if (value !== null) {
        this.heap.push(value);
        this.sifUp(this.heap.length - 1);
        return true;
      }
      return false;
    }

    size(): number {
      return this.heap.length;
    }

    isEmpty(): boolean {
      return this.heap.length === 0;
    }

    findMinimum(): T | undefined {
      return this.isEmpty() ? undefined : this.heap[0];
    }
}
