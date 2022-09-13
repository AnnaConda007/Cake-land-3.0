let nav = document.querySelector("nav")
let menu =document.querySelectorAll("a")

window.addEventListener('scroll', function(){
    if(window.pageYOffset>1){
        nav.style.backgroundColor="white";
        menu.forEach((element =>element.style.color="black"))
        nav.style.color="black"
    }else{
        nav.style.backgroundColor="transparent";
        menu.forEach((element =>element.style.color="white"))
        nav.style.color="white"
}}
)

 






