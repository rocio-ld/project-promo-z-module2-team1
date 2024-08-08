'use strict';

console.log('>> Ready :)');

//llamar al input

const nameInput = document.querySelector ('.js-name');
const title= document.querySelector ('.js-title');
const ageInput = document.querySelector ('.js-age');
const ageCard = document.querySelector ('.js-age-card');
const sexInput =document.querySelector ('.js-sexo');
const sexCard = document.querySelector ('.js-sex-card');
//escuchar el evento relacionandola con la funcion,declarar la funcion handleInputName y hallar el valor , y para pintarlo en la tarjeta buscar el title en html y añadirla con innerHTML.

function handleInputName () {
    const valueName = nameInput.value;
    title.innerHTML = valueName;
}
nameInput.addEventListener ('input', handleInputName);

nameInput.addEventListener ('input', handleInputName);
function handleInputAge () {
    const valueAge = ageInput.value;
    ageCard.innerHTML = valueAge + '' + `años`;
}
ageInput.addEventListener ('input', handleInputAge);

function handleInputSex () {
    const valueSex =sexInput.value;
    sexCard.innerHTML=valueSex;
}
sexInput.addEventListener ('input', handleInputSex);
