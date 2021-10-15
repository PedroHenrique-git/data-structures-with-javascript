export function printOptimalParenthesis(s: number[][], i: number, j: number) {
  if (i === j) {
    console.log(`A[${i}]`);
  } else {
    console.log('(');
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    console.log(')');
  }
}

export default function matrixChainOrder(p: number[]) {
  const n = p.length;
  const m: number[][] = [];
  const s: number[][] = [];

  for (let i = 0; i <= n; i += 1) {
    s[i] = [];
    for (let j = 0; j <= n; j += 1) {
      s[i][j] = 0;
    }
  }

  for (let i = 1; i <= n; i += 1) {
    m[i] = [];
    m[i][i] = 0;
  }
  for (let l = 2; l < n; l += 1) {
    for (let i = 1; i <= (n - l) + 1; i += 1) {
      const j = (i + l) - 1;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k <= j - 1; k += 1) {
        const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j]);
        if (q < m[i][j]) m[i][j] = q;
        s[i][j] = k;
      }
    }
  }
  printOptimalParenthesis(s, 1, n - 1);
  return m[1][n - 1];
}

console.log(matrixChainOrder([10, 100, 5, 50, 1]));
