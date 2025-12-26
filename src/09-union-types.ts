let myDinamicVar: any;
let userId: string | number;
userId = 1;
userId = '1';

function greeting(text: string | number) {
  if (typeof text === 'string') {
    text = text.toUpperCase();
  } else {
    text++;
  }
  console.log(text);
}

greeting("hola dani");
// greeting(null)

