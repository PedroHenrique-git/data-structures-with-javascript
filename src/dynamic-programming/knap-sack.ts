/* eslint-disable max-len */
export function findValues(n: number, capacity: number, ks: number[][], weights: number[], values: number[]) {
  let i = n;
  let k = capacity;
  console.log('Items that are part of the solution');
  while (i > 0 && k > 0) {
    if (ks[i][k] !== ks[i - 1][k]) {
      console.log(`items ${i} can be part of solution w, v: ${weights[i - 1]}, ${values[i - 1]}`);
      i -= 1;
      k -= ks[i][k];
    } else {
      i -= 1;
    }
  }
}

export default function knapSack(capacity: number, weights: number[], values: number[], n: number) {
  const ks: number[][] = [];
  for (let i = 0; i <= n; i += 1) {
    ks[i] = [];
  }
  for (let i = 0; i <= n; i += 1) {
    for (let w = 0; w <= capacity; w += 1) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]];
        const b = ks[i - 1][w];
        ks[i][w] = a > b ? a : b;
      } else {
        ks[i][w] = ks[i - 1][w];
      }
    }
  }
  findValues(n, capacity, ks, weights, values);
  return ks[n][capacity];
}

const values = [3, 4, 5];
const weights = [2, 3, 4];
const capacity = 5;
const n = values.length;
console.log(knapSack(capacity, weights, values, n));
