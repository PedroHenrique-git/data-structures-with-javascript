export const find = (i: number, parent: number[]) => {
    while(parent[i]) {
        i = parent[i];
    }
    return i;
};

const myUnion = (i: number, j: number, parent: number[]) => {
    if( i !== j) {
        parent[j] = i;
        return true;
    }
    return false;
};

const kruskal = (graph: number[][]) => {
  const { length } = graph;
  const parent: number[] = [];
  let ne = 0;
  let a1: number; 
  let b1 : number; 
  let u1: number; 
  let v1: number;
  const cost = initializeCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i += 1) {
      for (let j = 0; j < length; j += 1) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a1 = u1 = i;
          b1 = v1 = j;
        }
      }
    }
    u1 = find(u1, parent);
    v1 = find(v1, parent);
    if( myUnion(u1, v1, parent) ) {
        ne += 1;
    }
    const [a1][b1] = cost[b1][a1] = INF;
  }

  return parent;
};
