import { createNonSortedArray } from '../utils';

/* eslint-disable no-param-reassign */
function countingSort(array: number[]) {
  if (array.length < 2) return array;
  const maxValue = Math.max(...array);
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) counts[element] = 0;
    counts[element] += 1;
  });
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex += 1] = i;
      count -= 1;
    }
  });
  return array;
}

const arr9 = createNonSortedArray(6);
console.log(arr9);
console.log(countingSort(arr9));
