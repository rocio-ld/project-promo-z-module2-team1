
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

//const { render } = require("sass");

const photoCard = document.querySelector('.js-photo-card');
const titleCard = document.querySelector('.js-title-card');
const ageCard = document.querySelector ('.js-age-card');
const sexCard = document.querySelector ('.js-sex-card');
const sizeCard = document.querySelector ('.js-size-card');
const castrateCard = document.querySelector ('.js-castrate-card');
const mailCard = document.querySelector ('.js-mail-card');
const paragraphResult= document.querySelector('.js-result');

const urlParam= new URLSearchParams(window.location.search); //esto nos va a dar un objeto
const id= urlParam.get('id');
console.log(id);

const renderSize = (data)=> {
    if (data === 'small'){
        sizeCard.innerHTML = `Pequeño &lt;10kg`;
    } else if (data === 'medium'){
        sizeCard.innerHTML = `Mediano 10-25kg`;
    } else if(data === 'big'){
        sizeCard.innerHTML = `Grande >25kg`;
    }
}

const renderCard = (data)=>{
    photoCard.src = data.photo;
    titleCard.innerHTML = data.field2;
    ageCard.innerHTML = data.field1;
    sexCard.innerHTML = data.field3;
    castrateCard.innerHTML = data.field5;
    mailCard.innerHTML = data.field6;
    renderSize(data.field4);
    console.log(sizeCard);
    if(data.field4 === 'small'){
        paragraphResult.innerHTML = 'El menú ideal para tu perro es el <b>Menú Pavo<b>';
    } else if(data.field4 === 'medium'){
        paragraphResult.innerHTML = 'El menú ideal para tu perro es el <b>Menú Pollo<b>';
    } else if(data.field4 === 'big'){
        paragraphResult.innerHTML = 'El menú ideal para tu perro es el <b>Menú Salmón<b>';
    }
}
fetch (`https://dev.adalab.es/api/info/${id}`)
.then ((response)=> response.json())
.then ((dataCard)=>{
    renderSize(dataCard.data);
    renderCard(dataCard.data);
});

