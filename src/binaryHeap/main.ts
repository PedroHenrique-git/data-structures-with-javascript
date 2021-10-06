import MaxHeap from './MaxHeap';
import MinHeap from './MinHeap';

const heap = new MinHeap<number>();

// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);

for (let i = 0; i < 10; i += 1) {
  heap.insert(i);
}

console.log(heap.extract());
console.log(heap);
console.log(heap.size());
console.log(heap.isEmpty());
console.log(heap.findMinimum());

const maxHeap = new MaxHeap<number>();

for (let i = 0; i < 10; i += 1) {
  maxHeap.insert(i);
}

console.log(maxHeap.size());
console.log(maxHeap.findMinimum());
