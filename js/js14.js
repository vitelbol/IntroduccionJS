//arreglos o arrays
const numeros = [10,20,30,40,50];
console.table(numeros)

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo')
console.table(meses);

//const arreglo = ["Hola",10, true,"si",null,{nombre:"juan",trabajo:"programador"},[1,2,3]];
//console.log(arreglo);
//acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]);
//Conocer la extension de un arreglo
console.log(meses.length);

meses.forEach(function(numero){
    console.log(numero);
})