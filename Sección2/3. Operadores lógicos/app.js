// Operadores Lógicos 
/* < > <= >= == */

let edadAna, edadMaria, diferenciaEdad;
edadMaria = 28;
edadAna = 34;

var mayorAna = edadAna > edadMaria;
// !() false, == false, <, false 
console.log(mayorAna);

// Unarios, ++Incremento, --Decremento

edadMaria++;
console.log(edadMaria);
// console.log(edadAna++); Incorrecto 
console.log(++edadAna);

//Asignación, +=, -=, *=, /=, %=
let a = 11;
let b = 5;

let c = a % 5; //Residuo o resto de una división 
console.log(c);

a += b; // --> "a = a + b"
console.log(a);