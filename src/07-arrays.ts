(() => {
  let prices = [1, 2, 3, 4, 5, 6, 'hola', true];
  // prices.push('dani')
  prices.push(23);

  let products = ['hola', false];
  products.push(false);

  let mixed: (string | boolean | number)[] = [];
  // mixed.push(23);
  mixed.push('dani');

  let onlyNumbers: (number | string)[] = [1, 2, 3, 4, '5'];
  onlyNumbers.map((item) => item + 2);
})();
