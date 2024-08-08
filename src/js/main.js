'use strict';

console.log('>> Ready :)');

//llamar al input

const nameInput = document.querySelector ('.js-name');
const title= document.querySelector ('.js-title');
//escuchar el evento relacionandola con la funcion,declarar la funcion handleInputName y hallar el valor , y para pintarlo en la tarjeta buscar el title en html y añadirla con innerHTML.

function handleInputName () {
    const valueName = nameInput.value;
    title.innerHTML = valueName;
}


nameInput.addEventListener ('input', handleInputName);