/* eslint-disable no-param-reassign */
export function isSafe(maze: number[][], x: number, y: number) {
  const n = maze.length;
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true;
  }
  return false;
}

export function findPath(maze: number[][], x: number, y: number, solution: number[][]) {
  const n = maze.length;
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }
  if (isSafe(maze, x, y) === true) {
    solution[x][y] = 1;
    if (findPath(maze, x + 1, y, solution)) return true;
    if (findPath(maze, x, y + 1, solution)) return true;
    solution[x][y] = 0;
    return false;
  }
  return false;
}

export default function ratInAMaze(maze: number[][]) {
  const solution: number[][] = [];
  for (let i = 0; i < maze.length; i += 1) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j += 1) {
      solution[i][j] = 0;
    }
  }
  if (findPath(maze, 0, 0, solution) === true) {
    return solution;
  }
  return 'NO PATH FOUND';
}

const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
];

console.log(ratInAMaze(maze));
