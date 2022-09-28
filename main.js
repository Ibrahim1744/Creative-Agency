let menuBars=document.getElementsByClassName('toggle')[0];
let navigation=document.getElementsByClassName('navigation')[0];
menuBars.addEventListener("click",(eo)=>{
    menuBars.classList.toggle('active')
    navigation.classList.toggle('show-navigation')
})