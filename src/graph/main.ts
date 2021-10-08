import Stack from '../stacks/Stack';
import Graph, { breadthFirstSearch, depthFirstSearch, DFS } from './Graph';

const graph = new Graph<string>();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i += 1) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

const printVertex = <T>(value: T) => console.log(`Visited vertex: ${value}`);
const r = breadthFirstSearch<string>(graph, myVertices[0], printVertex);

const fromVertex = myVertices[0];
for (let i = 0; i < myVertices.length; i += 1) {
  const toVertex = myVertices[i];
  const path = new Stack<string>();
  for (let v = toVertex; v !== fromVertex; v = r.predecessors[v]!) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ` - ${path.pop()}`;
  }
  console.log(s);
}

depthFirstSearch(graph, printVertex);

const graph2 = new Graph<string>(true);
const myVertices2 = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices2.length; i += 1) {
  graph2.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph2);

console.log('----------------------');

const fTimes = result.finished;
let s = '';
for (let count = 0; count < myVertices.length; count += 1) {
  let max = 0;
  let maxName = null;
  for (let i = 0; i < myVertices.length; i += 1) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ` - ${maxName}`;
  delete fTimes[maxName!];
}

console.log(s);
