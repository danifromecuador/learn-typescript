(() => {
  let myDinamicVar: any;
  myDinamicVar = 23;
  myDinamicVar = true;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';

  myDinamicVar = 'hola';
  const rta = (myDinamicVar as string).toLowerCase();
  console.log(rta);

  myDinamicVar = 1122;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta);
})();
