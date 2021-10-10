/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import { createNonSortedArray } from '../utils';

function countingSortForRadix(array: number[], radixBase: number, significantDigit: number, minValue: number) {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < array.length; i += 1) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i += 1) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    buckets[bucketsIndex] += 1;
  }
  for (let i = 1; i < radixBase; i += 1) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i -= 1) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i += 1) {
    array[i] = aux[i];
  }
  return array;
}

function radixSort(array: number[], radixBase = 10) {
  if (array.length < 2) return array;
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }
  return array;
}

const arr11 = createNonSortedArray(10);
console.log(arr11);
console.log(radixSort(arr11));
