'use strict';

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100;
// console.log('> ' + getRandomNumber(100));

var numAleat = getRandomNumber(100);

console.log('el numero aleatorio es: ' + numAleat);

var buttonJuego = document.querySelector('.button-juego');
var input = document.querySelector('.entrada-num-juego');


function showInput() {
  console.log('el numero en input es: ' + input.value);
}

buttonJuego.addEventListener('click', showInput);


  if (numAleat === input.value) {

  }
