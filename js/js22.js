//const puntaje = 100;
//if(puntaje !==1000)
//{
//    console.log('No es igual')
//}
//else{
//    console.log('Si el puntaje es 1000')
//}

//const efectivo = 1000;
//const carrito = 800;

//if(efectivo> carrito){
//    console.log('El usuario puede pagar');
//}
//else{
//    console.log('Fondos insuficientes');
//}
const rol = 'EDITOR';
if(rol === 'ADMINISTRADOR'){
console.log('Acceso a todo el sistema');
}
else if(rol === 'EDITOR')
{
    console.log('Acceso limitado')
}
else
{
console.log('No tiene acceso');
}
