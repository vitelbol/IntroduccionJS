//arreglos o arrays
const numeros = [10,20,30,40,50];




//const arreglo = ["Hola",10, true,"si",null,{nombre:"juan",trabajo:"programador"},[1,2,3]];
//console.log(arreglo);
//acceder a los valores de un arreglo
//console.log(numeros[4]);
//console.log(numeros[2]);
//console.log(numeros[200]);
//Conocer la extension de un arreglo
//console.log(meses.length);

//meses.forEach(function(numero){
//    console.log(numero);
//})
//agrega al final
numeros.push(60,70,80);
//agrega al inicio
numeros.unshift(-10,-20,-30);
console.table(numeros)

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo')
//meses.pop(); //elimina la ultima posicion
//meses.shift(); // elimina al primer elemento
//meses.splice(2,1);
//console.table(meses);
//rest operator o spread operator
//const nuevoArreglo = [...meses, 'Junio']; //agrega al final
const nuevoArreglo = ['junio',...meses];//agrega al inicio
console.log(nuevoArreglo);