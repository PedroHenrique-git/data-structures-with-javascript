/* eslint-disable max-len */
const printArray = <T>(array: T[]) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
};

console.log(printArray([1, 2, 3, 4, 5, 6]));

const forEach = <T>(array: T[], callback: CallableFunction) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

const logItem = <T>(item: T) => console.log(item);

forEach([1, 2, 3, 4, 5], logItem);

const findMinArray = <T>(array: T[]): T => {
  let minValue = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < minValue) minValue = array[i];
  }
  return minValue;
};

console.log(`Valor minimo: ${findMinArray([1, 2, 3, -5, 5, 6])}`);

const arr10 = [1, 2, 3, -5, 5, 6];

console.log(`Valor minimo: ${Math.min(...arr10)}`);

// eslint-disable-next-line no-underscore-dangle
const mergeArrays_ = <T>(arrays: T[][]): T[] => {
  const count = arrays.length;
  const newArray: T[] = [];
  let k = 0;
  for (let i = 0; i < count; i += 1) {
    for (let j = 0; j < arrays[i].length; j += 1) {
      newArray[k += 1] = arrays[i][j];
    }
  }
  return newArray;
};

const mergeArraysConcat = <T>(arrays: T[][]): T[] => arrays.reduce((previousArray, currentArray) => previousArray.concat(currentArray));

console.log(mergeArrays_([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(mergeArraysConcat([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
