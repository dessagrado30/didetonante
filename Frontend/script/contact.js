//button modal section
const action=document.querySelector(".send");

function modal(img){
    action.showModal();
    action.classList.toggle("opacity-modal")
}
function closeModal(){
    event.preventDefault();
    action.classList.toggle("opacity-modal")
    const checkLogo = document.getElementById("close_button");
    checkLogo.innerHTML = '<img src="/Frontend/assets/icons/x.svg" alt="sendbutton"></img>'
    checkLogo.disabled = false;
    action.close();
}
