/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import Dictionary from '../dictionaries/Dictionary';
import Queue from '../queues/Queue';

const colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initializeColor = <T>(vertices: T[]) => {
  const color: { [ key: string ]: number } = {};
  for (let i = 0; i < vertices.length; i += 1) {
    color[String(vertices[i])] = colors.WHITE;
  }
  return color;
};

export const depthFirstSearch = <T>(graph: Graph<T>, callback: CallableFunction) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i += 1) {
    if (color[String(vertices[i])] === colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

export const DFS = <T>(graph: Graph<T>) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d: { [key: string]: number } = {};
  const f: { [key: string]: number } = {};
  const p: { [key: string]: T | undefined } = {};
  const time = { count: 0 };
  for (let i = 0; i < vertices.length; i += 1) {
    f[String(vertices[i])] = 0;
    d[String(vertices[i])] = 0;
    p[String(vertices[i])] = undefined;
  }
  for (let i = 0; i < vertices.length; i += 1) {
    if (color[String(vertices[i])] === colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

const DFSVisit = <T>(
  u: T, color: { [key: string]: number },
  d: { [key: string]: number },
  f: { [key: string]: number },
  p: { [key: string]: T | undefined },
  time: { count: number },
  adjList: Dictionary<T[]>,
) => {
  color[String(u)] = colors.GREY;
  // eslint-disable-next-line no-plusplus
  d[String(u)] = ++time.count;
  const neighbors = adjList.get(String(u));
  for (let i = 0; i < neighbors!.length; i += 1) {
    const w = neighbors![i];
    if (color[String(w)] === colors.WHITE) {
      p[String(w)] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[String(u)] = colors.BLACK;
  // eslint-disable-next-line no-plusplus
  f[String(u)] = ++time.count;
};

// eslint-disable-next-line max-len
const depthFirstSearchVisit = <T>(u: T, color: { [key: string]: number }, adjList: Dictionary<T[]>, callback: CallableFunction) => {
  color[String(u)] = colors.GREY;
  if (callback) {
    callback(u);
  }
  const neighbors = adjList.get(String(u));
  for (let i = 0; i < neighbors!.length; i += 1) {
    const w = neighbors![i];
    if (color[String(w)] === colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[String(u)] = colors.BLACK;
};

export const breadthFirstSearch = <T>(graph: Graph<T>, startVertex: T, callback: CallableFunction) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor<T>(vertices);
  const queue = new Queue<T>();
  const distances: Record<string, number> = {};
  const predecessors: Record<string, T | undefined> = {};
  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i += 1) {
    distances[String(vertices[i])] = 0;
    predecessors[String(vertices[i])] = undefined;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(String(u));
    color[String(u)] = colors.GREY;
    for (let i = 0; i < neighbors!.length; i += 1) {
      const w = neighbors![i];
      if (color[String(w)] === colors.WHITE) {
        color[String(w)] = colors.GREY;
        distances[String(w)] = distances[String(u)] + 1;
        predecessors[String(w)] = u;
        queue.enqueue(w);
      }
    }
    color[String(u)] = colors.BLACK;
    if (callback) {
      callback(u);
    }
  }

  return {
    distances,
    predecessors,
  };
};
export default class Graph<T> {
    protected isDirected: boolean;

    protected vertices: T[] = [];

    protected adjList: Dictionary<T[]>;

    constructor(isDirected: boolean = false) {
      this.isDirected = isDirected;
      this.vertices = [];
      this.adjList = new Dictionary<T[]>();
    }

    addVertex(v: T): void {
      if (!this.vertices.includes(v)) {
        this.vertices.push(v);
        this.adjList.set(String(v), []);
      }
    }

    addEdge(v: T, w: T): void {
      if (!this.adjList.get(String(v))) {
        this.addVertex(v);
      }
      if (!this.adjList.get(String(w))) {
        this.addVertex(w);
      }
      this.adjList.get(String(v))?.push(w);
      if (!this.isDirected) {
        this.adjList.get(String(w))?.push(v);
      }
    }

    getVertices(): T[] {
      return this.vertices;
    }

    getAdjList(): Dictionary<T[]> {
      return this.adjList;
    }

    toString(): string {
      let s = '';
      for (let i = 0; i < this.vertices.length; i += 1) {
        s += `${this.vertices[i]} ->`;
        const neighbors = this.adjList.get(String(this.vertices[i]));
        for (let j = 0; j < neighbors!.length; j += 1) {
          s += `${neighbors![j]}`;
        }
        s += '\n';
      }
      return s;
    }
}
