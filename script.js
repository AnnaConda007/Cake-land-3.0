let nav = document.querySelector("nav")
let menu =document.querySelectorAll("a")
let body=document.querySelector("body")
let checkbox_line=document.querySelector("checkbox-line")



window.addEventListener('scroll', function(){
    if(body.clientWidth>=900){ 
    if(window.pageYOffset>1){
        nav.style.backgroundColor="white";
        menu.forEach((element =>element.style.color="black"))
        nav.style.color="black"
        nav.style.boxShadow="0px 2px 15px rgb(217, 205, 205)"
    }else{
        nav.style.backgroundColor="transparent";
        menu.forEach((element =>element.style.color="white"))
        nav.style.color="white"
        nav.style.boxShadow="none"
}}}
)
 

 
 
 
 
 