'use strict'

//creo variables

const option = document.querySelector(".js-option");
const button = document.querySelector(".js-button");
const text = document.querySelector(".js-text");
const resultPlayer = document.querySelector(".js-resultPlayer")
const resultPc = document.querySelector(".js-resultPc")




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

//condicional resultado maquina

const winner = () => {

    const userOption = option.value;
    const pcOption = computerOption()
    console.log(userOption, pcOption)

    if (userOption === pcOption) {

        text.innerHTML = 'Empate';

    } else if (userOption === 'piedra' && pcOption === 'papel') {

        text.innerHTML = '¡Has perdido!';

    } else if (userOption === 'piedra' && pcOption === 'tijera') {

        text.innerHTML = '¡Has ganado!';

    } else if (userOption === 'papel' && pcOption === 'piedra') {

        text.innerHTML = '¡Has ganado!';

    } else if (userOption === 'papel' && pcOption === 'tijera') {

        text.innerHTML = '¡Has perdido!';

    } else if (userOption === 'tijera' && pcOption === 'piedra') {

        text.innerHTML = '¡Has perdido!';

    } else if (userOption === 'tijera' && pcOption === 'papel') {

        text.innerHTML = '¡Has perdido!';

    }

}

// //función de contar los puntos

// function counterPoints() {

//     winner()

//     let counterPlayer = Number(resultPlayer.innerHTML);
//     let counterPc = Number(resultPc.innerHTML);


//     if (text.innerHTML = '¡Has ganado!') {
//         counterPlayer += 1

//     } else if (text.innerHTML = '¡Has perdido!') {
//         counterPc += 1
//     }

// }



function handleClick(event) {

    //añadir un prevent default para que no refresque la página

    event.preventDefault();

    //llamamos a las funciones

    winner()
    // counterPoints()
}

//escuchar el evento del click del botón

button.addEventListener("click", handleClick)