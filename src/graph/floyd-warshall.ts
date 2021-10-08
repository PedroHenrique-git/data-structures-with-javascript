/* eslint-disable import/prefer-default-export */
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

export const floydMarshall = (graph: number[][]) => {
  const dist: number[][] = [];
  const { length } = graph;
  for (let i = 0; i < length; i += 1) {
    dist[i] = [];
    for (let j = 0; j < length; j += 1) {
      if (i === j) {
        dist[i][j] = 0;
      // eslint-disable-next-line no-restricted-globals
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }

  for (let k = 0; k < length; k += 1) {
    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length; j += 1) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};

console.log(floydMarshall(graph));
