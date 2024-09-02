/*
//Buscar en el servidor los datos de la tarjeta ya creada
if(idCard){
fetch (`https://dev.adalab.es/api/info/${idCard}`)
.then ((response)=> response.json())
.then ((data)=>{
    console.log(data)
    
});
}

Guardar el id de la tarjeta creada en localstorage.2.-crear un js solo para cardDetails, 3.- Recoger el id que esta guardado en el localstorage, 4.- si el id tiene algo hacer la peticion al servidor con el fetch
https://dev.adalab.es/api/info/${idCard}.5.-Pintar los datos de la tarjeta que nos dio el servidor*/

const photoCard = document.querySelector('.js-photo-card');
const titleCard = document.querySelector('.js-title-card');
const ageCard = document.querySelector ('.js-age-card');
const sexCard = document.querySelector ('.js-sex-card');
const sizeCard = document.querySelector ('.js-size-card');
const castrateCard = document.querySelector ('.js-castrate-card');
const mailCard = document.querySelector ('.js-mail-card');
const inputTall= document.querySelector ('.js-selectInput');

const urlParam= new URLSearchParams(window.location.search); //esto nos va a dar un objeto
const id= urlParam.get('id');
console.log(id);

fetch (`https://dev.adalab.es/api/info/${id}`)
.then ((response)=> response.json())
.then ((dataCard)=>{
    console.log(dataCard.data.field2)
    photoCard.src = dataCard.data.photo;
    titleCard.innerHTML = dataCard.data.field2;
    ageCard.innerHTML = dataCard.data.field1;
    sexCard.innerHTML = dataCard.data.field3;
    sizeCard.innerHTML = dataCard.data.field4;
    castrateCard.innerHTML = dataCard.data.field5;
    mailCard.innerHTML = dataCard.data.field6;
    console.log(sizeCard);
    const paragraphResult= document.querySelector('.js-result');
    const selectValue= inputTall.value;
    /*if(selectValue === 'small'){
        
        const result= document.createElement ('p')
        const text= document.createTextNode ('Menú Pavo')
        result.appendChild (text)
        paragraphResult.appendChild(result)
       

    }*/
});

