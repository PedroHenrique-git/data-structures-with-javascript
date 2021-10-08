// eslint-disable-next-line import/prefer-default-export
export const INF = Number.MAX_SAFE_INTEGER;

const minKey = (dist: number[], visited: boolean[]) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v += 1) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};

const prim = (graph: number[][]) => {
  const paret: number[] = [];
  const key: number[] = [];
  const visited: boolean[] = [];
  const { length } = graph;
  for (let i = 0; i < length; i += 1) {
    key[i] = INF;
  }
  key[0] = 0;
  paret[0] = -1;
  for (let i = 0; i < length - 1; i += 1) {
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v += 1) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        paret[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
};
