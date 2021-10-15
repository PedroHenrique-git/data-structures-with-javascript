/* eslint-disable no-param-reassign */
const UNASSIGNED = 0;

function usedInRow(matrix: number[][], row: number, num: number) {
  for (let col = 0; col < matrix.length; col += 1) {
    if (matrix[row][col] === num) return true;
  }
  return false;
}

function usedInBox(matrix: number[][], boxStartRow: number, boxStartCol: number, num: number) {
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      if (matrix[row + boxStartRow][col + boxStartCol] === num) return true;
    }
  }
  return false;
}

function unsedInCol(matrix: number[][], col: number, num: number) {
  for (let row = 0; row < matrix.length; row += 1) {
    if (matrix[row][col] === num) return true;
  }
  return false;
}

function isSafe(matrix: number[][], row: number, col: number, num: number) {
  return (
    !usedInRow(matrix, row, num)
        && !unsedInCol(matrix, col, num)
        && !usedInBox(matrix, row - (row % 3), col - (col % 3), num));
}

function solveSudoku(matrix: number[][]) {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;
  for (row = 0; row < matrix.length; row += 1) {
    for (col = 0; col < matrix.length; col += 1) {
      if (matrix[row][col] === UNASSIGNED) {
        checkBlankSpaces = true;
        break;
      }
    }
    if (checkBlankSpaces === true) {
      break;
    }
    if (checkBlankSpaces === false) {
      return true;
    }
    for (let num = 1; num <= 9; num += 1) {
      if (isSafe(matrix, row, col, num)) {
        matrix[row][col] = num;
        if (solveSudoku(matrix)) {
          return true;
        }
        matrix[row][col] = UNASSIGNED;
      }
    }
  }
  return false;
}

export default function sudokuSolver(matrix: number[][]) {
  if (solveSudoku(matrix) === true) {
    return matrix;
  }
  return 'NO SOLUTION EXISTS';
}
