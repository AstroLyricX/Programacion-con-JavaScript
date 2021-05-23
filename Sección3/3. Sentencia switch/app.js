// ----- Sentencia Switch -------

let mes = 7;

switch (mes) {
    case 1:
        console.log('Enero!');
        break;
    case 2:
        console.log('Febrero!');
        break;
    case 3:
        console.log('Marzo!');
        break;
    case 4:
        console.log('Abril!');
        break;
    case 5:
        console.log('Mayo!');
        break;

    default:
        console.log('Mes no Encontrado!!!');
        break;
}

let mejores_jugadores = 93;

switch (mejores_jugadores) {
    case 93:
        console.log('RONALDO '+mejores_jugadores);
        break;
    case 94:
        console.log('MESSI '+mejores_jugadores);
        break;
    case 92:
        console.log('NEYMAR JR '+mejores_jugadores);
        break;

    default:
        console.log('Jugador no encontrado!! '+'"'+mejores_jugadores+'"');
        break;
}