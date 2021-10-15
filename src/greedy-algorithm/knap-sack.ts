export default function knapSackGreedy(capacity: number, weights: number[], values: number[]) {
  const n = values.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i += 1) {
    if (weights[i] <= capacity - load) {
      val += weights[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
    }
  }
  return val;
}
