'use strict'

//creo variables

const option = document.querySelector(".js-option");
const selectImput = document.querySelector(".js-input")
const button = document.querySelector(".js-button");
const buttonReset = document.querySelector(".js-buttonReset");
const text = document.querySelector(".js-text");
const winnerText = document.querySelector(".js-winner");
const counterPlayer = document.querySelector(".js-counterPlayer");
const counterPc = document.querySelector(".js-counterPc");

//variables para el contador de puntos
let pointsPlayer = 0;
let pointsPc = 0;

//variable para el número de partidas máximas
let numberOfMoves = 0; //variable para el número de partidas máximas


//creamos función del número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//condicional resultado maquina

const computerOption = () => {
    const pcNumber = getRandomNumber(9)
    let pcOption = '';

    if (pcNumber <= 3) {

        pcOption = 'piedra'

    } else if (pcNumber >= 7) {

        pcOption = 'papel'

    } else {
        pcOption = 'tijera'
    }

    return pcOption
}

//condicional resultado maquina y suma de puntos  al contador

const winner = () => {

    const userOption = option.value;
    const pcOption = computerOption()

    if (userOption === pcOption) {

        text.innerHTML = 'Empate';

    } else if (userOption === 'piedra' && pcOption === 'papel') {

        text.innerHTML = '¡Has perdido!';
        pointsPc++;

    } else if (userOption === 'piedra' && pcOption === 'tijera') {

        text.innerHTML = '¡Has ganado!';
        pointsPlayer++;

    } else if (userOption === 'papel' && pcOption === 'piedra') {

        text.innerHTML = '¡Has ganado!';
        pointsPlayer++;

    } else if (userOption === 'papel' && pcOption === 'tijera') {

        text.innerHTML = '¡Has perdido!';
        pointsPc++;

    } else if (userOption === 'tijera' && pcOption === 'piedra') {

        text.innerHTML = '¡Has perdido!';
        pointsPc++;

    } else if (userOption === 'tijera' && pcOption === 'papel') {

        text.innerHTML = '¡Has ganado!';
        pointsPlayer++;

    }

}

// //función de contar los puntos

function counterPoints() {

    counterPc.innerHTML = pointsPc;
    counterPlayer.innerHTML = pointsPlayer;

}

//función que cuenta el número de partidas
function numberOfGames() {
    numberOfMoves++;

    if (numberOfMoves === 10) {

        buttonReset.classList.remove('hidden');
        button.classList.add('hidden');

        if (counterPc.innerHTML < counterPlayer.innerHTML) {

            winnerText.classList.remove('hidden');
            winnerText.innerHTML = 'LA MAQUINA HA PERDIDO';
        } else if (counterPc.innerHTML > counterPlayer.innerHTML) {

            winnerText.classList.remove('hidden');
            winnerText.innerHTML = 'LA MAQUINA HA GANADO';
        }
    };
}



//función manejadora del click
function handleClick(event) {

    //añadir un prevent default para que no refresque la página

    event.preventDefault();

    //llamamos a las funciones

    winner()
    counterPoints()
    numberOfGames()
}

//escuchar el evento del click del botón "Jugar"

button.addEventListener("click", handleClick)


//función manejadora del click de reset
function handleClickReset() {

    buttonReset.classList.add('hidden');
    button.classList.remove('hidden');

    numberOfMoves = 0;
    counterPc.innerHTML = 0;
    counterPlayer.innerHTML = 0;
    numberOfGames()
    selectImput.selected = true; //para que el contenido de las opciones vuelvan a ser las iniciales
    text.innerHTML = "¡Vamos a jugar!";
    winnerText.classList.add('hidden');
}

//escuchar el evento del click del botón "Jugar"

buttonReset.addEventListener("click", handleClickReset)