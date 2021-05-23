// ----- Función ------
function mensaje1(){
    console.log('Mensaje desde la función!!');
}
mensaje1();

function mensaje2(msj2){
    console.log(msj2);
}
let msj2 = 'Mensaje como argumento de la función!!';
mensaje2(msj2);

function mensaje3(){
    return 'Mensaje como devolución de la función!!';
}
let msj3 = mensaje3();
console.log(msj3);