const btnCreate = document.querySelector ('.js-btnCreate');
const linkCard= document.querySelector ('.js-link');
const handleCreateCard=(ev)=>{
    ev.preventDefault();
    fetch('https://dev.adalab.es/api/info/data',{
        method: 'POST',
        body: JSON.stringify(pets),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response)=>response.json())
    .then((data)=>{
         console.log(data);
        if(data.success === true){
            idCard = data.infoID
            linkCard.classList.remove('hidden')
            console.log(linkCard);
        }
    });
};


btnCreate.addEventListener('click', handleCreateCard);
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