 // If anidados

// edad < 11 es un niño.
// edad > 12, es < 18, es un adolecente.
// edad > 19, es < 59, es un adulto.
// edad > 60 es un anciano.

let nombre = 'Grover';
let edad = 60;

if (edad <= 11) {
    console.log(nombre + ' es un niño!');
} else if ((edad >= 12) && (edad <= 18)) {
    console.log(nombre + ' es un adolecente!');
} else if ((edad >= 19) && (edad <= 59)) {
    console.log(nombre + ' es un adulto!');
} else {
    console.log(nombre + ' es un anciano!');
}