const INF = Number.MAX_SAFE_INTEGER;

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

// eslint-disable-next-line no-shadow
const dijkstra = (graph: number[][], src: number) => {
  const dist: number[] = [];
  const visited: boolean[] = [];
  const { length } = graph;

  for (let i = 0; i < length; i += 1) {
    dist[i] = INF;
    visited[i] = false;
  }

  // eslint-disable-next-line no-shadow
  const minDistance = (dist: number[], visited: boolean[]) => {
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

  dist[src] = 0;

  for (let i = 0; i < length; i += 1) {
    const u = minDistance(dist, visited);
    visited[u] = true;
    for (let v = 0; v < length; v += 1) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }

  return dist;
};

console.log(dijkstra(graph, 3));
