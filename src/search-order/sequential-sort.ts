/* eslint-disable no-restricted-syntax */
function sequentialSort(array: number[], value: number): number {
  for (const item of array) if (item === value) return item;
  return -1;
}

console.log(sequentialSort([5, 4, 3, 2, 1], 3));
