import {
    biggerOrEquals,
    Compare,
    defaultCompare,
    defaultDiff,
    defaultEquals,
    DOES_NOT_EXIST,
    lesserOrEquals
} from '../utils';

function interpolationSort(
  array: number[],
  value: number,
  comapareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff,
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high
        && biggerOrEquals(value, array[low], comapareFn)
        && lesserOrEquals(value, array[high], comapareFn)
  ) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);
    if (equalsFn(array[position], value)) return position;
    if (comapareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position + 1;
    }
  }
  return DOES_NOT_EXIST;
}

console.log(interpolationSort([6, 5, 4, 3, 2, 1], 4));
