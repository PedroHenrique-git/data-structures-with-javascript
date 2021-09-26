function factorialIterative(num: number): number | string {
  if (num < 0) return 'Invalid';
  let total = 1;
  for (let n = num; n > 1; n -= 1) {
    total *= n;
  }
  return total;
}

console.log(factorialIterative(5));

function recursiveFactorial(num: number): number {
  if (num === 1 || num === 0) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

function fibonacciIterative(num: number): number {
  if (num < 1) return 1;
  if (num <= 2) return 1;
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = num;
  for (let i = 2; i <= num; i += 1) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }
  return fibN;
}

console.log(fibonacciIterative(10));

function fibonacciRecursive(num: number): number {
  if (num < 1) return 0;
  if (num <= 2) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciRecursive(10));

function fibonacciMemoization(num: number): number {
  const memo = [0, 1];
  const fibonacci = (n: number): number => {
    if (memo[n] !== null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  };
  return fibonacci;
}
