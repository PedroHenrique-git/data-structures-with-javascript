export function printSolution(solution: string[][], wordX: string, m: number, n: number) {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = '';
  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] + answer;
      a -= 1;
      b -= 1;
    } else if (solution[a][b] === 'left') {
      b -= 1;
    } else {
      a -= 1;
    }
    x = solution[a][b];
  }
  console.log(`lcs: ${answer}`);
}

export default function lcs(wordX: string, wordY: string) {
  const m = wordX.length;
  const n = wordY.length;
  const l: number[][] = [];
  const solution: string[][] = [];
  for (let i = 0; i <= m; i += 1) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j += 1) {
      l[i][j] = 0;
      solution[i][j] = '0';
    }
  }
  for (let i = 0; i <= m; i += 1) {
    for (let j = 0; j <= n; j += 1) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b;
        solution[i][j] = (l[i][j] === l[i - 1][j]) ? 'top' : 'left';
      }
    }
  }
  printSolution(solution, wordX, m, n);
  return l[m][n];
}
