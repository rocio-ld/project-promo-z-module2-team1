const inputs = document.querySelectorAll('.js-inputs');
const resetBtn = document.querySelector('.js-reset');

const handleClickReset = ()=>{  
    //poner las propiedades de los objetos a vacía
    for (const property in pets) { //for in : recorrer un objeto
       pets[property] = '';
    }
    console.log(pets)
    //llevar los values de los input a vacío
    for (const input of inputs){
        input.value = '';
    }
    //llevar los innerHTML a su valor original
    title.innerHTML='NOMBRE';
    ageCard.innerHTML='Años';
    sexCard.innerHTML='M/F';
    castrateCard.innerHTML='C/No';
    sizeCard.innerHTML='Tamaño';
    mailCard.innerHTML='estoescorreoprueba@gmail.com';
}
resetBtn.addEventListener('click', handleClickReset);