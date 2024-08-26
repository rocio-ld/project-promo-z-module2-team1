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

const urlParam= new URLSearchParams(window.location.search); //esto nos va a dar un objeto
const id= urlParam.get('id');
console.log(id);

fetch (`https://dev.adalab.es/api/info/${id}`)
.then ((response)=> response.json())
.then ((dataCard)=>{
    console.log(dataCard.data.field2)
});
