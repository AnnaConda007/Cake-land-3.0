let nav = document.querySelector("nav")
let menu =document.querySelectorAll("a")
let body=document.querySelector("body")
let checkbox_line=document.querySelector("checkbox-line")
let wrap = document.querySelector(".wrapper") 
let shoppingBasket= document.querySelector(".basket") 

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


const reguest="http://myjson.dit.upm.es/api/bins/cc08"
const xhr = new XMLHttpRequest()
let list = document.querySelector(".catalog-box")
xhr.open("GET", reguest)
xhr.responseType="json"
xhr.onload = function() {
   let response=xhr.response
   for(let key in response){
       list.innerHTML+=`
       <div class="product-item" data-id="${response[key].id}">
       <div class="img-wrap">
       <img class="product-photo" src="${response[key].img}" alt="foto">
       </div>
       <div class="info-about-product">
           <h3 class="product-name">${response[key].name}</h3>
             <span class="price">₽ ${response[key].price}</span>
             <button  class="add-product" >добавить</button>
   </div>
   </div>` 
   }
 }
xhr.send()


wrap.addEventListener("click", function(e){
    e.preventDefault()
    let targetElement = e.target
    if(targetElement.classList.contains("add-product")) {
    let productId=targetElement.closest(".product-item").dataset.id
    let product = document.querySelector(`[data-id="${productId}"]`)
    if(!product.classList.contains("hold")){
        let productCopy=product.cloneNode(true)
        shoppingBasket.appendChild(productCopy)
        let addProductBtn=productCopy.querySelector(".add-product")
        addProductBtn.remove()
        }
        product.classList.add("hold")
}})








