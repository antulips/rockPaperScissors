//PIEDRA, PAPEL O TIJERA

//Invito a jugar
function invitar() {
    let quiereJugar = confirm('Antes de navegar por este sitio, ¿jugamos a "Piedra, papel o tijera?"');
    return quiereJugar ? jugar() : alert('Bueno, ¡ojalá juguemos la próxima!');
};

//Declaro un array con las opciones posibles de juego y las variables para almacenar las elecciones.
const opciones = ['Piedra', 'Papel', 'Tijera'];
let eleccionUsuario;
let eleccionPC;

//El usuario debe poder elegir una opción
function eligeUsuario() {
    //Para asegurar una respuesta con un tipo de dato adecuado.
    while (!eleccionUsuario || eleccionUsuario < 1 || eleccionUsuario > 3) {
        eleccionUsuario = parseInt(prompt('Elegí una opción así jugamos.\n1 es Piedra, 2 es Papel y 3 es Tijera.\n¿Cuál elegís?'));
    }
};

//La computadora debe realizar una jugada aleatoria
function eligePC() {
    eleccionPC = parseInt(Math.round(Math.random() * 3 + 1));
};

//Comparo para saber quién gana
//casos:
//piedra gana a tijera
//1 - 3
//tijera gana a papel
//3 - 2
//papel gana a piedra
//2 - 1
let resultado;

function calcularGanador() {
    //creo variables de resultado
    let empate = ('Yo también elegí ' + opciones[eleccionPC - 1] + '.\nEs un empate...\n\n¿Desempatamos?');
    let ganaUsuario = ('¡Has ganado! ' + opciones[eleccionUsuario - 1] + ' le gana a ' + opciones[eleccionPC - 1] + '.\n¿Me das la revancha?');
    let pierdeUsuario = ('Perdiste, humano. ' + opciones[eleccionPC - 1] + ' le gana a ' + opciones[eleccionUsuario - 1] + '. ¡Ja, ja, ja!\n¿Te animas a jugar otra vez?');

    //resultados posibles
    switch (eleccionUsuario) {
        case 1:
            if (eleccionPC == 1) {
                //empate
                resultado = empate;
            } else if (eleccionPC == 2) {
                //gana PC
                resultado = pierdeUsuario;
            } else {
                //gana usuario
                resultado = ganaUsuario;
            }
            break;

        case 2:
            if (eleccionPC == 2) {
                //empate
                resultado = empate;
            } else if (eleccionPC == 3) {
                //gana PC
                resultado = pierdeUsuario;
            } else {
                //gana usuario
                resultado = ganaUsuario;
            }
            break;

        case 3:
            if (eleccionPC == 3) {
                //empate
                resultado = empate;
            } else if (eleccionPC == 1) {
                //gana PC
                resultado = pierdeUsuario;
            } else {
                //gana usuario
                resultado = ganaUsuario;
            }
            break;
    }
    return resultado;
};

//muestro el ganador e invito a seguir jugando.
function mostrarGanador() {
    let continua = confirm(resultado);
    return continua ? jugar() : alert('Eso fue divertido...\nAhora, ¡a seguir navegando!');
}

//Concateno el juego:
function jugar() {
    eligeUsuario();
    eligePC();
    calcularGanador();
    mostrarGanador();
};

//Inicio el juego al abrir la página.
invitar();

