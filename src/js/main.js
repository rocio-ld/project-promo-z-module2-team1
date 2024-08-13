'use strict';

console.log('>> Ready :)');

//llamar al input

const title= document.querySelector ('.js-title');
const ageCard = document.querySelector ('.js-age-card');
const sexCard = document.querySelector ('.js-sex-card');
const sizeCard = document.querySelector ('.js-size-card');
const castrateCard = document.querySelector ('.js-castrate-card');
const mailCard = document.querySelector ('.js-mail-card');
const form = document.querySelector ('.js-form');
const fill = document.querySelector ('.js-drop'); //título de rellena
const share = document.querySelector ('.js-share'); //título de comparte
const create = document.querySelector ('.js-create-share'); //desplegable de comparte

/*
---Crear evento en el cual si escribes, se cambia automáticamente en la carta
 1. Creado evento sobre el <form> (completo)
 2. Creado la función
    2.1. Hemos llamado al id del input (target) del event (objeto por defecto de la consola del navegador)
    2.2. Hemos recogido el valor de ese id
    2.3. Condicional 
        if (key === 'nombre-id-html') {
        nombre-constante-tarjeta.innerHTML = value (valor recogido anteriormente del id);
        } else if (con la estructura anterior pero de los demás id)
*/

const pets = {
    field1:'',
    field2:'',
    field3:'',
    field4:'',
    field5:'',
    field6:'',
    field7:'',
    photo:'',
    
};

function handleForm(event) {
    const key = event.target.id;
    const value = event.target.value;

    if (key === 'name') {
        title.innerHTML = value;
        pets.field1 = value;
    } else if (key === 'age') {
        ageCard.innerHTML = value;
        pets.field2 = value;
    } else if (key === 'sex') {
        sexCard.innerHTML = value;
        pets.field3 = value;
    } else if (key === 'tall') {
        sizeCard.innerHTML = value;
        pets.field4 = value;
    } else if (key === 'castrate-yes') {
        castrateCard.innerHTML = value;
        pets.field5 = value;
    } else if (key === 'castrate-no') {
        castrateCard.innerHTML = value;
        pets.field6 = value;
    } else if (key === 'email') {
        mailCard.innerHTML = value;
        pets.field7 = value;
    }
    console.log(pets)
}
form.addEventListener('input', handleForm);

function handleFill (){
    form.classList.toggle ('hidden');
}
fill.addEventListener('click', handleFill);

function handleShare (){
    create.classList.toggle ('hidden');
}
share.addEventListener('click', handleShare);
















//const nameInput = document.querySelector ('.js-name');
// const ageInput = document.querySelector ('.js-age');
// const sexInput = document.querySelector ('.js-sexo');
// const sizeInput = document.querySelector ('.js-size');
// const castrateInput = document.querySelector ('.js-castrate');
// const castrateNoInput = document.querySelector ('.js-castrate-no');
// const mailInput = document.querySelector ('.js-mail');


//escuchar el evento relacionandola con la funcion,declarar la funcion handleInputName y hallar el valor , y para pintarlo en la tarjeta buscar el title en html y añadirla con innerHTML.

// function handleInputName () {
//     const valueName = nameInput.value;
//     title.innerHTML = valueName;
// }
// nameInput.addEventListener ('input', handleInputName);

// nameInput.addEventListener ('input', handleInputName);
// function handleInputAge () {
//     const valueAge = ageInput.value;
//     ageCard.innerHTML = valueAge + ' ' + `años`;
// }
// ageInput.addEventListener ('input', handleInputAge);

// function handleInputSex () {
//     const valueSex =sexInput.value;
//     sexCard.innerHTML=valueSex;
// }
// sexInput.addEventListener ('input', handleInputSex);

// function handleInputSize (){
//     const valueSize = sizeInput.value;
//     sizeCard.innerHTML = valueSize;
    
// }
// sizeInput.addEventListener ('input', handleInputSize);

// function handleInputCastrate(){
//     const valueCastrate = castrateInput.value;
//     castrateCard.innerHTML = valueCastrate;
// }
// castrateInput.addEventListener ('input', handleInputCastrate);

// function handleInputCastrateNo(){
//     const valueCastrate = castrateNoInput.value;
//     castrateCard.innerHTML = valueCastrate;
// }
// castrateNoInput.addEventListener ('input', handleInputCastrateNo);


// mailInput.addEventListener('input', handleInputMail);
// function handleInputMail (){
//     const valueMail = mailInput.value;
//     mailCard.innerHTML = valueMail;
    
// }
// mailInput.addEventListener('input', handleInputMail);





