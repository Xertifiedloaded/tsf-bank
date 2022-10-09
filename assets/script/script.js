const hamburger = document.querySelector(".hamburger")
const hide = document.querySelector(".hide")
const solid = document.querySelector(".fa-solid")
let isActive = false

let showMenu = () => {
if(isActive==false){
    isActive=true
    solid.classList.replace("fa-bars","fa-xmark")
    hide.classList.replace("hide", "show")
}else{

    isActive =false
    // solid.classList.replace("fa-bars","fa-xmark")
    hide.classList.replace("show","hide")
    solid.classList.replace("fa-xmark","fa-bars")
}
// hide.classList.toggle("show") toggle on or off
 
}
hamburger.addEventListener("click",showMenu)