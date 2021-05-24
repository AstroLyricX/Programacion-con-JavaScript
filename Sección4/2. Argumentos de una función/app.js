// ------- Argumentos de una Función ---------

function sumar(a,b,c){
    return a+b+c;
}
let result = sumar(4,5,8);
console.log(result);


function sumar1(a,b,c=3){
    return a+b+c;
}
let result1 = sumar1(3,7);
console.log(result1);

let sumar2 = function (a,b){
    return a*b;
}
let result2 = sumar2(3,7);
console.log(result2);

function sumar3(a,b,c){
    return a+b+c;
}
let result3 = sumar3(100,150,50);
console.log(result3);