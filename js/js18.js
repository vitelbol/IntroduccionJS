//DEclaracion de funcion
function sumar(numero1=0, numero2=0){ //numero1,2 son parametros
    console.log(numero1+numero2);
}
sumar(10,10,);//argumentos o valores reales
sumar(3,3,);
sumar(3,6,);
sumar(1);
//Expresion de la funcion
const sumar2 = function(n1,n2){
    console.log(n1+n2);
}
sumar2(5,10);
//IIFE
(function(){
    console.log("Esto es una funcion");
})();