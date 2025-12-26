type Sizes = 'S' | 'M' | 'L';

function createProductToJson(
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
) {
  return { title, createdAt, stock, size };
}
const product1 = createProductToJson('P1', new Date(), 12, 'L');
console.log(product1.title);
console.log(product1.stock);
console.log(product1.createdAt);

const createProductToJsonV2 = (
  title: string,
  createdAt: Date,
  stock: number,
  size: Sizes
) => {
  return { title, createdAt, stock, size };
};

const product2 = createProductToJson('P1', new Date(), 12);
console.log(product2.title);
console.log(product2.stock);
console.log(product2.size);
