import Dictionary from '../dictionaries/Dictionary';

export default class Graph<T> {
    protected isDirected: boolean;

    protected vertices: T[] = [];

    protected adjList: Dictionary<T[]>;

    constructor() {
      this.isDirected = false;
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
}
