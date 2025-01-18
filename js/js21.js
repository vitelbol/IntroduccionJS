//arrow function
const sumar2 = (n1,n2)=>console.log(n1+n2);
sumar2(5,10);
/* estructura basica arrow function
const aprendiendo = ()=>{

}*/
const aprendiendo = (tecnologia)=>console.log(`Aprendiendo ${tecnologia}`)

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo')
const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio:500},
    {nombre: 'Televisor 50 pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'Laptop', precio:800},
]

//foreach
meses.forEach(mes=>{
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
})
//arraymethod
//includes
let resultado = meses.includes('Marzo');
console.log(resultado)
//somes ideal para arreglo de objetos
resultado = carrito.some(producto=> producto.nombre === 'Celular Pro');
console.log(resultado)
//reduce, sumar el precio total
resultado = carrito.reduce((total,producto)=>total + producto.precio,0);
console.log(resultado)
//filter
resultado = carrito.filter(producto=>producto.precio > 400);
resultado = carrito.filter(producto=>producto.nombre !== 'Celular');
console.log(resultado);