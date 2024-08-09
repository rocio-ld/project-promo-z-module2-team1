'use strict';

console.log('>> Ready :)');

//llamar al input

const nameInput = document.querySelector ('.js-name');
const title= document.querySelector ('.js-title');
const ageInput = document.querySelector ('.js-age');
const ageCard = document.querySelector ('.js-age-card');
const sexInput = document.querySelector ('.js-sexo');
const sexCard = document.querySelector ('.js-sex-card');
const sizeInput = document.querySelector ('.js-size');
const sizeCard = document.querySelector ('.js-size-card');
const castrateInput = document.querySelector ('.js-castrate');
const castrateCard = document.querySelector ('.js-castrate-card');
const castrateNoInput = document.querySelector ('.js-castrate-no');
const mailInput = document.querySelector ('.js-mail');
const mailCard = document.querySelector ('.js-mail-card');

//escuchar el evento relacionandola con la funcion,declarar la funcion handleInputName y hallar el valor , y para pintarlo en la tarjeta buscar el title en html y añadirla con innerHTML.

function handleInputName () {
    const valueName = nameInput.value;
    title.innerHTML = valueName;
}
nameInput.addEventListener ('input', handleInputName);

nameInput.addEventListener ('input', handleInputName);
function handleInputAge () {
    const valueAge = ageInput.value;
    ageCard.innerHTML = valueAge + ' ' + `años`;
}
ageInput.addEventListener ('input', handleInputAge);

function handleInputSex () {
    const valueSex =sexInput.value;
    sexCard.innerHTML=valueSex;
}
sexInput.addEventListener ('input', handleInputSex);

function handleInputSize (){
    const valueSize = sizeInput.value;
    sizeCard.innerHTML = valueSize;
    
}
sizeInput.addEventListener ('input', handleInputSize);

function handleInputCastrate(){
    const valueCastrate = castrateInput.value;
    castrateCard.innerHTML = valueCastrate;
}
castrateInput.addEventListener ('input', handleInputCastrate);

function handleInputCastrateNo(){
    const valueCastrate = castrateNoInput.value;
    castrateCard.innerHTML = valueCastrate;
}
castrateNoInput.addEventListener ('input', handleInputCastrateNo);


function handleInputMail (){
    const valueMail = mailInput.value;
    mailCard.innerHTML = valueMail;
    
}
mailInput.addEventListener('input', handleInputMail);



