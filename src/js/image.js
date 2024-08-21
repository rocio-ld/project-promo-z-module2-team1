// función para cargar una image
const fr = new FileReader();//
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');

function getImage(e){
    const myFile = e.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}
function writeImage(){
    console.log(fr.result);
    profileImage.src = fr.result;
    
}

fileField.addEventListener('change', getImage);