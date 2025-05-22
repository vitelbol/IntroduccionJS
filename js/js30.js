const usuarioAutenticado = new Promise( ( resolve, reject)=> {
    const auth = true;
    if(auth){
        resolve('Usuario autenticado'); // el promise si cumple
    }
    else
    {
        reject('No se puede iniciar sesion'); // el promise no cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// en los promises existen 3 valores
//pending : no se ha cumplido pero tampoco se ha rechazadp
// fullfilled : ya se cumplo
//rejected : se ha rechazado o no se pudo cumplor