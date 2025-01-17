//"use strict"; //correr JS en modo escrito
const producto ={
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
Object.seal(producto);
//freeze no permite agregar ni eliminar ni modificar existentes
//seal no permite agregar ni eliminar pero si modificar existentes
producto.precio = 'NUEVO PRECIO';
delete producto.precio;
console.log(producto);