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
            linkCard.href= `./cardDetails.html?id=${idCard}`
            console.log(linkCard);
        }
    });
};


btnCreate.addEventListener('click', handleCreateCard);
