//estas clases deben estar en en los inputs del html
const nameInput = document.querySelector ('.js-name');
const ageInput = document.querySelector ('.js-age');
const sexInput = document.querySelector ('.js-sexo');
const sizeInput = document.querySelector ('.js-size');
const castrateInput = document.querySelector ('.js-castrate');
const castrateNoInput = document.querySelector ('.js-castrate-no');
const mailInput = document.querySelector ('.js-mail');
const resetBtn = document.querySelector('.js-reset');


const handleClickReset = ()=>{
    console.log('holi');
    nameInput.value = '';
    //con todas las demás
    title.innerHTML = '';
    //con todos los demás
    for (const property in pets) { //for in : recorrer un objeto
       pets[property] = '';
    }
    console.log(pets);
    // pets.photo = ''; 
    // con todos los demás
}
resetBtn.addEventListener('click', handleClickReset);