const calcTotal = (prices: number[]): string => {
  let total = 0;
  prices.forEach((item) => {
    total += item;
  });
  // return total;
  return total.toString();
};

const printTotal = (prices: number[]): void => {
  const rta = calcTotal(prices);
  console.log(`El total es: ${rta}`);
  // return 23
};

printTotal([1, 2, 3]);
