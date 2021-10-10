import { createNonSortedArray } from '../utils';
import insertionSort from './insection-sort';

function createBuckets(array: number[], bucketSize: number) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets: number[][] = [];
  for (let i = 0; i < bucketCount; i += 1) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i += 1) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBuckets(buckets: number[][]) {
  const sortedArray: number[] = [];
  for (let i = 0; i < buckets.length; i += 1) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

function bucketSort(array: number[], bucketSize = 5) {
  if (array.length < 2) return array;
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

const arr10 = createNonSortedArray(10);
console.log(arr10);
console.log(bucketSort(arr10));
