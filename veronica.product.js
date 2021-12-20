//Samlade variabler
const src = localStorage.getItem("src");
const productName= localStorage.getItem("productList");
const beskrivning = localStorage.getItem("beskrivning");
const kostnad = localStorage.getItem("kostnad");
const products = JSON.parse(productName);



products.map( (product)=> {

document.querySelector(".product-container").innerHTML

+= `<div class="ProdNamn"> Namn: ${product.productName} </div>

<div class="beskrivningDiv"> Beskrivning: ${product.bes} </div> 

<div class="prisDiv"> Pris: ${product.kos} </div>

<img class="picContainer"> src=${product.img} alt="${product.productName}" id="9" >`
})