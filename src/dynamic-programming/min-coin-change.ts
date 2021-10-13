export default function minCoinChange(coins: number[], amount: number) {
  const cache: number[][] = [];

  const makeChange = (value: number): number[] => {
    if (!value) return [];
    if (cache[value]) return cache[value];

    let min: number[] = [];
    let newMin: number[] = [];
    let newAmount;

    for (let i = 0; i < coins.length; i += 1) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0
            && (newMin.length < min.length - 1 || !min.length)
            && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log(`new min ${min} for ${amount}`);
      }
    }
    // eslint-disable-next-line no-return-assign
    return (cache[value] = min);
  };
  return makeChange(amount);
}

console.log(minCoinChange([1, 5, 10, 25], 10));
