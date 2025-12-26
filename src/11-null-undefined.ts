let number: number;
let string: string;

let myNull: null = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;

function hi(name: string | null) {
  let hello = 'Hola ';
  if (typeof name === 'string') {
    // console.log(hello, name);
    hello += name;
  } else {
    // console.log('No hay ningún nombre');
    hello += 'nobody';
  }
  console.log(hello);
}

hi('dani');
hi(null);

function hiV2(name: string | null) {
  let hello = 'Hola ';
  hello += name?.toLocaleLowerCase() || 'nobody';
  console.log(hello);
}

hiV2('dani');
hi(null);
