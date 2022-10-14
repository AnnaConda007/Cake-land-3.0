let nav = document.querySelector("nav")
let menu =document.querySelectorAll("a")
let body=document.querySelector("body")
let checkbox_line=document.querySelector("checkbox-line")
let wrap = document.querySelector(".wrapper") 
let shoppingBasket= document.querySelector(".basket") 
let priceArr=[]

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
 let nameBlock
function getXMLHttpRequest(url,nameBlock,classNameBlock ){
    const reguest=url
const xhr = new XMLHttpRequest()
nameBlock  = document.querySelector(classNameBlock)
xhr.open("GET", reguest)
xhr.responseType="json"
xhr.onload = function() {
   let response=xhr.response
   for(let key in response){
    nameBlock.innerHTML+=`
       <div class="product-item" data-id="${response[key].id}">
       <div class="img-wrap">
       <img class="product-photo" src="${response[key].img}" alt="foto">
       </div>
           <h3 class="product-name">${response[key].name}</h3>
             <span class="price"> ${response[key].price} ₽</span>
             <button  class="add-product" >добавить</button>
   </div>` 
   }
 }
xhr.send()
}

getXMLHttpRequest("http://myjson.dit.upm.es/api/bins/fj1w","list",".catalog-cake-box" )
getXMLHttpRequest("http://myjson.dit.upm.es/api/bins/2k5k","list",".catalog-pie-box" )





wrap.addEventListener("click", function(e){
    e.preventDefault()
    let targetElement = e.target
    if(targetElement.classList.contains("add-product")) {
    let productId=targetElement.closest(".product-item").dataset.id
    let product = document.querySelector(`[data-id="${productId}"]`)
    if(!product.classList.contains("hold")){
        let productCopy=product.cloneNode(true)
        let sumPriceHTML=document.querySelector(".sum-price")
        shoppingBasket.insertBefore(productCopy,sumPriceHTML)
        let addProductBtn=productCopy.querySelector(".add-product")
        addProductBtn.remove()
        productCopy.classList.add("productCopy")
 let ptoductImgCopy=productCopy.querySelector(".img-wrap")
ptoductImgCopy.classList.add("ptoductImgCopy")
let productNameCopy=productCopy.querySelector(".product-name")
productNameCopy.classList.add("productNameCopy")
let productPriceCopy=productCopy.querySelector(".price")
productPriceCopy.classList.add("productPriceCopy")
let btnPlus=document.createElement("button")
btnPlus.innerHTML="+"
btnPlus.classList.add("btnPlusMinus")
productNameCopy.appendChild(btnPlus)
let btnMinus=document.createElement("button")
btnMinus.innerHTML="-"
btnMinus.classList.add("btnPlusMinus")
productNameCopy.appendChild(btnMinus)
let counterHTML=document.createElement("p")
counterHTML.classList.add("counter")
productNameCopy.appendChild(counterHTML)

let strPrice =productPriceCopy.textContent;
let numPrice= parseInt(strPrice,10)
priceArr.push(numPrice)
let sumPriceArr=priceArr.reduce(function(prew, item){
    return prew + item
},0)
sumPriceHTML.innerHTML=`Итого:  ${sumPriceArr} `
let btnCounter=1
btnPlus.addEventListener("click", function(){
    priceArr.push(numPrice)
     sumPriceArr=priceArr.reduce(function(prew, item){
        return prew + item
    },0)
    btnCounter++
    sumPriceHTML.innerHTML=` Итого:  ${sumPriceArr} `
counterHTML.innerHTML=`${btnCounter}`
}
)




btnMinus.addEventListener("click", function(){
 
    i = priceArr.indexOf(numPrice);
    if(i >= 0) {priceArr.splice(i,1)}
     sumPriceArr=priceArr.reduce(function(prew, item){
        return prew + item
    },0)
    btnCounter--
    sumPriceHTML.innerHTML=` Итого:  ${sumPriceArr} `
counterHTML.innerHTML=`${btnCounter}`
if(btnCounter==0){
    productCopy.remove()}
    product.classList.remove("hold")
}
)




 
        }
        product.classList.add("hold")
}}

)
 





let nop=document.querySelector(".checkout")

nop.addEventListener("click", function(){alert(priceArr)})




/*
btnMinus.addEventListener("click", function(){
    priceArr.pop(numPrice)
     sumPriceArr=priceArr.reduce(function(prew, item){
        return prew - item
    })
    btnCounter--
    sumPriceHTML.innerHTML=` Итого:  ${sumPriceArr} `
counterHTML.innerHTML=`${btnCounter}`
}
)*/